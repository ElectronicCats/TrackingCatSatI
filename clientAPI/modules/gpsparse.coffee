events = require 'events'

class gpsparse

	gpsparse.prototype = new events.EventEmitter
	
	errors =
		parse: "Error de conexion del GPS."
		format: "Error al codificar latlng"

	flags =
		lat: 2
		lng: 3
	
	data: (@nmea) ->
		if nmea.search('GPRMC') is 1
			try 
				position = format nmea
				@emit 'found', position
			catch err
				@emit 'errors', err
		return

	#Retorna un objeto con los datos del estring "GPRMC"
	format = (nmea) ->
		item = nmea.split ','
		throw errors.parse if !item[3]
		{ #return
			id:  item[0]
			hora: item[1]
			estado: item[2]
			latlng: calc item[3],item[4],item[5],item[6]
			vel: item[7]
			curso: item[8]
			fecha: item[9]
		}

	#Returna lat y lng con un formato compatible con HTML5
	calc = (lat,clat,lng,clng) ->
		lat = lat.toCoords flags.lat, clat
		lng = lng.toCoords flags.lng, clng
		{ #return
			lat: lat
			lng: lng
		}

	String::toCoords = (latorlng, part) ->
		coords = parseFloat @substr(latorlng, @length)
		coords /= 60
		coords += parseInt @substr(0, latorlng)
		coords *= -1 if part is 'W' or part is 'S'
		throw errors.format if isNaN coords
		coords

	String::toFloat = ->
		parseFloat @

	String::toInt = ->
		parseInt @

#Retorno una instacia del modulo
module.exports = new gpsparse()