/*
var fs = require('fs');


  // This line opens the file as a readable stream
  var readStream = fs.createReadStream("zip.js");
	var temp;
  // This will wait until we know the readable stream is actually valid before piping
  readStream.on('open', function (data) {
	console.log(data);
    // This just pipes the read stream to the response object (which goes to the client)
//    readStream.pipe(temp);
	console.log(temp);
  });

  // This catches any errors that happen while creating the readable stream (usually invalid names)
  readStream.on('error', function(err) {
    res.end(err);
  });

var fs = require('fs');
var i = 0;
var readableStream = fs.createReadStream('input.txt');
var data = '';

readableStream.on('data', function(chunk) {
console.log(i);

    data+=chunk;

i++;
});
var buff;
readableStream.on('end', function() {
buff= Buffer.byteLength(data);
for(var i=0;i<data.length;i++){
//console.log(data.substr(i,data.indexOf(" ")));
var temp = data.substr(0,data.indexOf(" "));
if(temp==="a" || temp==="an" || temp==="the")
{
console.log(i,temp);
}
//console.log(i,temp);
//console.log(i,data);
data = data.substr(data.indexOf(" ")+1);
//console.log(i,data);
//i = data.indexOf(" ");
//console.log(i)
}
   console.log(data.length);
});*/

var fs = require('fs');
var readableStream = fs.createReadStream('input.txt');
var data = '';
var chunk;

readableStream.on('readable', function() {
    while ((chunk=readableStream.read()) != null) {
        data += chunk;
    }
});

readableStream.on('end', function() {
    console.log(data)
});
