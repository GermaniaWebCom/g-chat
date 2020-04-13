// @ Refactored by GWC 13/04/2020 to 09 AM under License MIT.
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

//Using express to manage the requests
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    //Detect user connection
    console.log('a user connected');
    socket.on('disconnect', function(){
    // if user disconnect
    console.log('user disconnected');
  });
  // Sending chat message
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
//Listen on port 3000 (is default)
http.listen(port, function(){
  console.log('listening on *:' + port);
});
