/*
* @Ahutor: Iddar Olivares Morales.
* @Program: Serial Test
* $GPRMC,222806.000,A,1912.6054,N,09610.4248,W,0.67,330.62,150713,,,D*79
*/ 
'use strict';
var serialport = require('serialport');
//var nmea = require('nmea');

var horaFormat = function(horaString){
	//054920.000
	return {
		 horas: horaString.substr(0,2)
		,minutos: horaString.substr(2,2)
		,segundos: horaString.substr(4,2)
	};
}

var latlonFormat = function(gprmcObj){
	var lat = parseFloat(gprmcObj.lat.substr(2,gprmcObj.lat.length)) / 60 + parseInt(gprmcObj.lat.substr(0,2));
	var lon = parseFloat(gprmcObj.lon.substr(3,gprmcObj.lon.length)) / 60 + parseInt(gprmcObj.lon.substr(0,3));

	if(gprmcObj.clon == 'W'){
		lon = lon * -1;
	}
	if(gprmcObj.clat == 'S'){
		lat = lat * -1;
	}

	return {
		 lat: lat
		,lon: lon
		,hora: horaFormat(gprmcObj.hora)
		,velocidad: parseFloat(gprmcObj.vel) * 1.852 //Velocidad de nudos a Km
	}
}

var gprmcParse = function(gprmcString){
	var items = gprmcString.split(',');
	return {
		 id:  items[0]
		,hora: items[1]
		,estado: items[2]
		,lat: items[3]
		,clat: items[4]
		,lon: items[5]
		,clon: items[6]
		,vel: items[7]
		,curso: items[8]
		,fecha: items[9]
	}
}

var port = new serialport.SerialPort('/dev/ttyUSB0', {
	 baudrate: 57600
	,parser: serialport.parsers.readline('\n')
});

port.on('data', function(line){
	
	if( line.search("GPRMC") == 1 ) {
		var gprmcObj = gprmcParse(line);
		var position = latlonFormat(gprmcObj);
		//console.log("\n" + line + "\n");
		console.log(
			  "Hora: " + position.hora.horas 
			+ ":" + position.hora.minutos
			+ ":" + position.hora.segundos
			+ " Lat: " + position.lat 
			+ " Lon: "+ position.lon
			+ " Velocidad: " + position.velocidad.toFixed(2)
		);
	}
});


/* Server */

