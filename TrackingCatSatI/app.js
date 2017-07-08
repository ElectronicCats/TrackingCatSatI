
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
		,hum: items[1]
    ,pres: items[2]
		,temp: items[3]
		,lat: items[4]
		,lon: items[5]
    ,alt: items[6]
    ,vel: items[7]
    ,ssid: items[8]
	}
}

var port = new serialport('/dev/cu.usbmodem1421', {
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
        hume: gprmcObj.hum,
        press: gprmcObj.pres,
        temp: gprmcObj.temp,
        alt: gprmcObj.alt,
        vel: gprmcObj.vel,
        ssid: gprmcObj.ssid
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
      /*        T   = temperature (in °C)

      var seaLevel=1013.25;
      console.log(((math.pow((seaLevel/sen.press),0.190223)-1.0)*(parseFloat(sen.temp2)+273.15))/0.0065);
*/
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
