var net = require('net');
var client = net.connect({port: 8080,host:"192.168.0.32"}, function() {
   console.log('connected to server!');  
});
client.on('data', function(data) {
   console.log(data.toString());
	for(var i =0 ; i <50 ; i++)
	{
	var a = i+1;
	//console.log(a);
	//net.Socket.write(a);
	}
console.log(new net.Socket().address());
console.log(new net.Socket().localAddress);

setTimeout(function(){   client.end();},3000);

});
client.on('end', function() { 
   console.log('disconnected from server');
});
