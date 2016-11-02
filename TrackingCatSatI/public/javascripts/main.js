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

	var tih = L.marker([21.855147, -102.290729]);
	var c80 = L.marker([21.855147, -102.290729]);
	var c55 = L.marker([21.855147, -102.290729]);
	var c83= L.marker([21.855147, -102.290729]);
	var ena = L.marker([21.855147, -102.290729]);
	var can = L.marker([21.855147, -102.290729]);
	var mor = L.marker([21.855147, -102.290729]);
	var fer = L.marker([21.855147, -102.290729]);
	var mir = L.marker([21.855147, -102.290729]);
	var co1 = L.marker([21.855147, -102.290729]);
	var co2 = L.marker([21.855147, -102.290729]);
	var co3 = L.marker([21.855147, -102.290729]);
	var co4 = L.marker([21.855147, -102.290729]);
	var itm = L.marker([21.855147, -102.290729]);
	var prr = L.marker([21.855147, -102.290729]);
	var c95 = L.marker([21.855147, -102.290729]);
	var c68 = L.marker([21.855147, -102.290729]);

	mymap.addLayer(tih);
	mymap.addLayer(c80);
	mymap.addLayer(c55);
	mymap.addLayer(c83);
	mymap.addLayer(ena);
	mymap.addLayer(can);
	mymap.addLayer(mor);
	mymap.addLayer(fer);
	mymap.addLayer(mir);
	mymap.addLayer(co1);
	mymap.addLayer(co2);
	mymap.addLayer(co3);
	mymap.addLayer(co4);
	mymap.addLayer(itm);
	mymap.addLayer(prr); //284
	mymap.addLayer(c95);
	mymap.addLayer(c68);

	var posizionc80 = [];
	var posizionc55 = [];
	var posizionc83 = [];
	var posizionena = [];
	var posizioncan = [];
	var posizionmor = [];
	var posizionfer = [];
	var posizionmir = [];
	var posizionco1 = [];
	var posizionco2 = [];
	var posizionco3 = [];
	var posizionco4 = [];
	var posizionitm = [];
	var posizionprr = [];
	var posizionc95 = [];
	var posizionc68 = [];

	socket.on('coords:gps', function (data) {
		console.log(data);
		var pos = data.latlng;

			if(pos.di == "080")
			{
				c80.setLatLng([pos.lat,pos.lng]).update();
				posizionc80.push(data.latlng);
				c80.bindPopup(pos.di).openPopup();
				var polyline = L.polyline(posizionc80, {color: 'red'}).addTo(mymap);
				mymap.fitBounds(polyline.getBounds());
			}
			if(pos.di == "155")
			{
				c55.setLatLng([pos.lat,pos.lng]).update();
				posizionc55.push(data.latlng);
				c55.bindPopup(pos.di).openPopup();
				var polyline = L.polyline(posizionc55, {color: 'green'}).addTo(mymap);
				mymap.fitBounds(polyline.getBounds());
			}
			if(pos.di == "283")
			{
				c83.setLatLng([pos.lat,pos.lng]).update();
				posizionc83.push(data.latlng);
				c83.bindPopup(pos.di).openPopup();
				var polyline = L.polyline(posizionc83, {color: 'blue'}).addTo(mymap);
				mymap.fitBounds(polyline.getBounds());
			}
			if(pos.di == "195")
			{
				c95.setLatLng([pos.lat,pos.lng]).update();
				posizionc95.push(data.latlng);
				c95.bindPopup(pos.di).openPopup();
				var polyline = L.polyline(posizionc95, {color: 'yellow'}).addTo(mymap);
				mymap.fitBounds(polyline.getBounds());
			}
			if(pos.di == "ENA")
			{
				ena.setLatLng([pos.lat,pos.lng]).update();
				posizionena.push(data.latlng);
				ena.bindPopup(pos.di).openPopup();
				var polyline = L.polyline(posizionena, {color: 'white'}).addTo(mymap);
				mymap.fitBounds(polyline.getBounds());
			}
			if(pos.di == "CAN")
			{
				can.setLatLng([pos.lat,pos.lng]).update();
				posizioncan.push(data.latlng);
				can.bindPopup(pos.di).openPopup();
				var polyline = L.polyline(posizioncan, {color: 'brown'}).addTo(mymap);
				mymap.fitBounds(polyline.getBounds());
			}
			if(pos.di == "MOR")
			{
				mor.setLatLng([pos.lat,pos.lng]).update();
				posizioncan.push(data.latlng);
				mor.bindPopup(pos.di).openPopup();
				var polyline = L.polyline(posizioncan, {color: 'black'}).addTo(mymap);
				mymap.fitBounds(polyline.getBounds());
			}
			if(pos.di == "FER")
			{
				fer.setLatLng([pos.lat,pos.lng]).update();
				posizionfer.push(data.latlng);
				fer.bindPopup(pos.di).openPopup();
				var polyline = L.polyline(posizionfer, {color: 'mustar'}).addTo(mymap);
				mymap.fitBounds(polyline.getBounds());
			}
			if(pos.di == "MIR")
			{
				mir.setLatLng([pos.lat,pos.lng]).update();
				posizionmir.push(data.latlng);
				mir.bindPopup(pos.di).openPopup();
				var polyline = L.polyline(posizionmir, {color: 'violet'}).addTo(mymap);
				mymap.fitBounds(polyline.getBounds());
			}
			if(pos.di == "CO1")
			{
				co1.setLatLng([pos.lat,pos.lng]).update();
				posizionicao1.push(data.latlng);
				co1.bindPopup(pos.di).openPopup();
				var polyline = L.polyline(posizionicao1, {color: 'cyan'}).addTo(mymap);
				mymap.fitBounds(polyline.getBounds());
			}
			if(pos.di == "CO2")
			{
				co2.setLatLng([pos.lat,pos.lng]).update();
				posizionco2.push(data.latlng);
				co2.bindPopup(pos.di).openPopup();
				var polyline = L.polyline(posizionco2, {color: 'red'}).addTo(mymap);
				mymap.fitBounds(polyline.getBounds());
			}
			if(pos.di == "CO3")
			{
				co3.setLatLng([pos.lat,pos.lng]).update();
				posizionco3.push(data.latlng);
				co3.bindPopup(pos.di).openPopup();
				var polyline = L.polyline(posizionco3, {color: 'orange'}).addTo(mymap);
				mymap.fitBounds(polyline.getBounds());
			}
			if(pos.di == "CO4")
			{
				co4.setLatLng([pos.lat,pos.lng]).update();
				posizionco4.push(data.latlng);
				co4.bindPopup(pos.di).openPopup();
				var polyline = L.polyline(posizionco4, {color: 'green'}).addTo(mymap);
				mymap.fitBounds(polyline.getBounds());
			}
			if(pos.di == "ITM")
			{
				itm.setLatLng([pos.lat,pos.lng]).update();
				posizionitm.push(data.latlng);
				itm.bindPopup(pos.di).openPopup();
				var polyline = L.polyline(posizionitm, {color: 'yellow'}).addTo(mymap);
				mymap.fitBounds(polyline.getBounds());
			}
			if(pos.di == "PRR")
			{
				prr.setLatLng([pos.lat,pos.lng]).update();
				posizionprr.push(data.latlng);
				prr.bindPopup(pos.di).openPopup();
				var polyline = L.polyline(posizionprr, {color: 'violet'}).addTo(mymap);
				mymap.fitBounds(polyline.getBounds());
			}
			if(pos.di == "168")
			{
				tih.setLatLng([pos.lat,pos.lng]).update();
				posizionc68.push(data.latlng);
				tih.bindPopup(pos.di).openPopup();
				var polyline = L.polyline(posizionc68, {color: 'white'}).addTo(mymap);
				mymap.fitBounds(polyline.getBounds());
			}
			if(pos.di == "TIH")
			{
				tih.setLatLng([pos.lat,pos.lng]).update();
				posiziontih.push(data.latlng);
				tih.bindPopup(pos.di).openPopup();
				var polyline = L.polyline(posiziontih, {color: 'red'}).addTo(mymap);
				mymap.fitBounds(polyline.getBounds());
			}

	});
/*
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
*/

}

$(document).on('ready',onScript);
