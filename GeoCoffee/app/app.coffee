#Importo los modulos necesarios
require "coffee-script"
http = require 'http'
path = require 'path'
express = require 'express'
socket = require 'socket.io'
routes = require './routes'
assets = require 'connect-assets'
#Creo las instancias
app = express()
server = http.createServer app
io = socket.listen server

app.configure ->
	app.set 'port', process.env.PORT || 3000
	app.set 'views', "#{__dirname}/views"
	app.set 'view engine', 'jade'
	app.use express.favicon()
	app.use express.logger('dev')
	app.use express.bodyParser()
	app.use express.methodOverride()
	app.use app.router
	app.use require('stylus').middleware( __dirname + '../public' )
	app.use express.static( path.join( __dirname, '../public' ) )

app.configure 'development', ->
	app.use express.errorHandler()
	app.use assets
		build: true
		compress: false
		buildDir: false

app.configure 'production', ->
	app.use assets
		build: true
		compress: true

app.get '/', routes.index

io.sockets.on 'connection', (socket) ->
	#socket.on 'coords:me', (data) ->
	#	socket.broadcast.emit 'coords:user', data
	#	return
	
	socket.on 'coords:gps', (data) ->
		socket.broadcast.emit 'coords:gps', data
		return
	return

server.listen app.get('port'), ->
	console.log "Express esta corriendo en el puerto #{app.get 'port'}"