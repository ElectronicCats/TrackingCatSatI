/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , test = require('./routes/test')
  , http = require('http')
  , path = require('path');

var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

// all environments
app.set('port', process.env.PORT || 1337, null);
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
app.get('/:id', test.index);

io.sockets.on('connection', function(socket){
  socket.on('coords:me', function(data){
    socket.broadcast.emit('coords:user', data);
  });
  socket.on('coords:gps', function(data){
    socket.broadcast.emit('coords:user', data);
  });

});

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});