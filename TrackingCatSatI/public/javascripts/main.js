// @file: main.js
function onScript(){

	var socket = io.connect(window.location.href);


	var mymap = L.map('mimapa',{
		 center: [19.210216666666668, -96.17367333333334]
		,zoom:16
	});

	tiles = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Map data &copy; 2016 OpenStreetMap contributors, Sacitec &copy; 2016 Electronic Cats',
		key: 'BC9A493B41014CAABB98F0471D759707'

	});

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

var gageTemp	=0;
var gageHum	= 0;
var gageTemp2	=0;
var gagePress	= 0;

	socket.on('datos:sensors', function (data) {
		console.log(data);
		var sen = data.sensores;
		gageTemp2	= sen.temp2;

		gageHum	= sen.hume;

		gageTemp	= sen.temp;

		gagePress	= sen.press;

		Temperatura.refresh(gageTemp);
		Humedad.refresh(gageHum);

		Presion.refresh(gagePress);
		Temperatura2.refresh(gageTemp2);


	});

	function onlocation(position){
		//console.log(position);
		var pos = position.latlng;
		var computer = L.marker([pos.lat,pos.lng]);
		mymap.addLayer(computer);
		computer.bindPopup("La PC esta aqui").openPopup();
		socket.emit('coords:me', {latlng: pos});

	}

	var gps = L.marker([19.210216666666668, -96.17367333333334]);
	mymap.addLayer(gps);
	var posizioni = [];

	socket.on('coords:gps', function (data) {
		console.log(data);
		var pos = data.latlng;
		gps.setLatLng([pos.lat,pos.lng]).update();
		posizioni.push(data.latlng);
		gps.bindPopup( "CatSat").openPopup();
		var polyline = L.polyline(posizioni, {color: 'red'}).addTo(mymap);
		mymap.fitBounds(polyline.getBounds());

	});

	var Temperatura = new JustGage({
		id: "gauge",
		value: gageTemp,
		min: -60,
		max: 90,
		title: "Temperatura"
	});

	var Humedad = new JustGage({
    id: "gauge1",
    value: gageHum,
    min: 0,
    max: 100,
    title: "Humedad"
  });

	var Presion = new JustGage({
    id: "gauge2",
    value: gagePress,
    min: 250,
    max: 1100,
    title: "Presion"
  });

	var Temperatura2 = new JustGage({
		id: "gauge3",
		value: gageTemp2,
		min: -60,
		max: 90,
		title: "Temperatura 2"
	});


}

$(document).on('ready',onScript);
		//Lat: 19.210216666666668 Lon: -96.17367333333334
