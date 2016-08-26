// @file: main.js
function onScript(){

	var socket = io.connect(window.location.href);


	var mymap = L.map('mimapa',{
		 center: [19.210216666666668, -96.17367333333334]
		,zoom:16
	});

	var tiles = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');



	mymap.addLayer(tiles);

	mymap.locate({
		enableHighAccuracy: true
	});

	mymap.on('locationfound', onlocation);

	socket.on('coords:user', onRecive);

	function onRecive(data){
		console.log(data);
		var pos = data.latlng;
		var computer = L.marker([pos.lat,pos.lng]);
		mymap.addLayer(computer);
		computer.bindPopup("Usuarios aqui");
	}
	

	function onlocation(position){
		//console.log(position);
		var pos = position.latlng;
		var computer = L.marker([pos.lat,pos.lng]);
		mymap.addLayer(computer);
		//computer.bindPopup("La PC esta aqui").openPopup();

		socket.emit('coords:me', {latlng: pos});

	}

	var gps = L.marker([19.210216666666668, -96.17367333333334]);
	mymap.addLayer(gps);

	socket.on('coords:gps', function (data) {
		console.log(data);
		var pos = data.latlng;
		gps.setLatLng([pos.lat,pos.lng]).update();
		
		gps.bindPopup( "Hora " + data.hh + ":" + data.mm + ":" + data.ss).openPopup();
		//socket.emit('my other event', { my: 'data' });
	});

}

$(document).on('ready',onScript);
		//Lat: 19.210216666666668 Lon: -96.17367333333334
