# Funcion main
onScript = ->

	socket = io.connect(window.location.href)
	map = L.map "map",
		center: [19.21021, -96.17367]
		zoom:14

	# 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
	tiles = L.tileLayer 'http://{s}.tile.cloudmade.com/{key}/997/256/{z}/{x}/{y}.png',
    	maxZoom: 18
    	attribution: '&copy; 2011 OpenStreetMap, &copy; 2013 Iddar Olivares for Firefox OS'
    	key: 'BC9A493B41014CAABB98F0471D759707'
	
	#Agrego la capa de tiles al mapa
	map.addLayer tiles
	map.locate { enableHighAccuracy: true }
	setInterval (->
		map.locate { enableHighAccuracy: true }
		return
		), 10000

	cp = L.marker [19.190278, -96.153333]
	map.addLayer cp

	onRecive = (data) ->
		console.log data
		pos = data.latlng
		cp.setLatLng([pos.lat,pos.lng]).update()
		cp.bindPopup "Usuarios Aqui"

	computer = L.marker [19.190278, -96.153333]
	map.addLayer computer

	onLocation = (position) ->
		hr = new Date()
		min = hr.getMinutes()
		seg = hr.getSeconds()
		pos = position.latlng
		computer.setLatLng([pos.lat,pos.lng]).update()
		map.panTo [pos.lat,pos.lng]
		computer.bindPopup("Aqui estas Tu :) " + min + ":" +  + seg).openPopup()
		#socket.emit 'coords:me', {latlng: pos}

	#Espero el evento 'locationfound' con laposicion del usuario
	#map.on 'locationfound', onLocation
	#Espero la respuesta del socket 'coords:user' 
	#socket.on 'coords:user', onRecive

	gps = L.marker [19.190278, -96.153333]
	map.addLayer gps

	socket.on 'coords:gps', (data) ->
		hr = new Date()
		min = hr.getMinutes()
		seg = hr.getSeconds()
		console.log data
		pos = data.latlng
		gps.setLatLng([pos.lat,pos.lng]).update()
		gps.bindPopup("Aqui estas Tu :) " + min + ":" +  + seg).openPopup()
		return

	return

$(document).on 'ready', onScript