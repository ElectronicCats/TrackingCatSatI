
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
const fs = require('fs');

var math = require('mathjs');

var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var serialport = require('serialport') //Serial tools
var math = require('mathjs')

var stringParse = function(recvString){
var items = recvString.split(',');
	return {
		 id:  items[0]
		,temp1: items[1]
		,hum: items[2]
    ,pres: items[3]
		,temp2: items[4]
		,mx: items[5]
		,my: items[6]
		,mz: items[7]
		,ax: items[8]
		,ay: items[9]
		,az: items[10]
		,gx: items[11]
		,gy: items[12]
		,gz: items[13]
		,lat: items[14]
		,lon: items[15]
	}
}

var port = new serialport('/dev/cu.Bluetooth-Incoming-Port', {
//var port = new serialport('COM20', {
	 baudrate: 9600
	,parser: serialport.parsers.readline('\n')
});

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);


io.sockets.on('connection', function(socket){
	socket.on('coords:me', function(data){
		console.log(data);
		socket.broadcast.emit('coords:user', data);
	});

	//socket.emit('news', { hello: 'world' });

	port.on('data', function(line){
      var today = new Date();
      var gprmcObj = stringParse(line);
			var pos = {
				 lat: gprmcObj.lat,
         lng: gprmcObj.lon
			};

      var sen = {
        temp: gprmcObj.temp1,
        hume: gprmcObj.hum,
        press: gprmcObj.pres,
        temp2: gprmcObj.temp2,
			};

      /* Hyposometric formula:                      */
      /*                                           */
      /*     ((P0/P)^(1/5.257) - 1) * (T + 273.15)  */
      /* h = -------------------------------------  */
      /*                   0.0065                   */
      /*                                            */
      /* where: h   = height (in meters)            */
      /*        P0  = sea-level pressure (in hPa)   */
      /*        P   = atmospheric pressure (in hPa) */
      /*        T   = temperature (in °C)           */

      var seaLevel=1013.25;
      console.log(((math.pow((seaLevel/sen.press),0.190223)-1.0)*(parseFloat(sen.temp2)+273.15))/0.0065);

    console.log(gprmcObj);
		socket.emit('coords:gps', {
				 latlng: pos
			}); //emit

      socket.emit('datos:sensors', {
  				 sensores: sen
  			}); //emit

      fs.open('info.txt', 'wx', (err, fd) => {
        if (err) {
          if (err.code === "EEXIST") {
            fs.appendFile('info.txt', '\n'+ today + line, (err) => {
              if (err) throw err;
              console.log('String agregada');
            });
            return;
          } else {
      throw err;
    }
  }
  fs.writeFile('info.txt', today + line, (err) => {
    if (err) throw err;
    console.log('String guardado');
      });//write file
    });
	}); //port on

});


server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
