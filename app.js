
/**
 *  Example of Panel Ground Station
 *  Node JS
 *  Autors:
 *  Iddar Olivares
 *  Andres Sabas
 *  Eduardo Contreras
 **/

//Module dependencies.


var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

const fs = require('fs');

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
    ,pres: items[5]
		,temp2: items[3]
		,mx: items[5]
		,my: items[3]
		,mz: items[7]
		,ax: items[8]
		,ay: items[9]
		,az: items[10]
		,gx: items[11]
		,gy: items[12]
		,gz: items[13]
		,lat: items[16]
    ,lon: items[17]
    ,alt: items[18]
    ,vel: items[19]
    ,rssi: items[20]
	}
}

// Gracias a //kike nuevo version nodejs 10.xxx y serialport 7.xxx
const Readline = require('@serialport/parser-readline')

var port = new serialport('/dev/cu.usbserial-A9M9DV3R', {
//var port = new serialport('COM20', {
   baudRate: 9600
});

const parser = port.pipe(new Readline({ delimiter: '\n' }))

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

	parser.on('data', function(line){
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
        rssi: gprmcObj.rssi,
        alt: gprmcObj.alt,
        vel: gprmcObj.vel
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
