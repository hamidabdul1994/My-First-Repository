//Here i am intantiating my net  package
var net = require('net');
//var socket = require("socket");
//here i am creting server
var server = net.createServer(function(connection) {
    console.log('client connected');

    //here i am checking whether server request is completed or ended, just listening event
    connection.on('end', function() {
        console.log('client disconnected');
    });

    //console.log("Remote" + socket.remoteAddress);
    connection.write('Hello World!\r\n');
    // connection.pipe(connection);
});

// here i listening server to be activated with port 8081 and host by default 127.0.0.1
server.listen(8081, function() {
    console.log('server is listening');
});
