require('coffee-script')
require('coffee-script/register')
var Serialport = require ('serialport')
gps = require ('./modules/gpsparse')
io = require ('socket.io-client')
util = require('util')

	var port = new Serialport('/dev/cu.usbmodem1411', {
	baudRate: 9600,
	parser: Serialport.parsers.readline('\n')
});

//Espero responda el puerto Serie
port.on('data', function(line){
	console.log(line)
	gps.data(line)
});

//espero el evento 'found' que retorna la posicion
gps.on('found', function(position){
	console.log(position.latlng)
	socket.emit('coords:gps', position)
});

//Espero el ecento 'noFound' que marca un error de conexion
gps.on('errors', function(err){
	util.log(err)
});

socket = io.connect('http://localhost:3000')
socket.on('connect',function(data){
	util.log("conectado")
});
