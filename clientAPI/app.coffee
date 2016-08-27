/*Wero estuvo aqui*/
require('coffee-script')
require('coffee-script/register')
var Serialport = require ('serialport')

io = require ('socket.io-client')
util = require('util')

var stringParse = function(recvString){
var items = recvString.split(',');
	return {
		 id:  items[0]
		,temp1: items[1]
		,hum: items[2]
		,temp2: items[3]
		,mx: items[4]
		,my: items[5]
		,mz: items[6]
		,ax: items[7]
		,ay: items[8]
		,az: items[9]
		,gx: items[10]
		,gy: items[11]
		,gz: items[12]
		,lat: items[13]
		,lon: items[14]
	}
}

//	var port = new Serialport('/dev/cu.usbmodem1421', {
var port = new Serialport('COM20', {
	baudRate: 9600,
	parser: Serialport.parsers.readline('\n')
});

 //Espero responda el puerto Serie
 port.on('data', function(line){
	//console.log(line)
 	//console.log(line.search("A"))		//No detecta el search
  // if(line.search("A1") == 1 ) {
	 	var recvObj = stringParse(line);  //parseo de la String
	 	console.log(recvObj.id)
	 	console.log(recvObj.lat)
		console.log(recvObj.lon)
	// }
});

socket = io.connect('http://localhost:3000')
socket.on('connect',function(line){
	util.log("conectado")
});
