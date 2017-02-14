//    var AdmZip = require('adm-zip');
var fs = require('fs');
var zlib = require("zlib");
var archiver = require('archiver');

// create a file to stream archive data to. 

var output = fs.createWriteStream(__dirname + '/example.zip');
var archive = archiver('zip', {
    store: true // Sets the compression method to STORE. 
});
 
// listen for all archive data to be written 
output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');
});
 
// good practice to catch this error explicitly 
archive.on('error', function(err) {
  throw err;
});
 


var archive = archiver('zip', {
    store: true // Sets the compression method to STORE. 
});
/*var file = ["input.txt","mkdir.js","mydata.json"];
	file.forEach(function(value,key){
	var file1 = __dirname + '/'+value;
	archive.append(fs.createReadStream(file1), { name: value });

	});*/

// pipe archive data to the file 
archive.pipe(output);

//archive.directory('output');
archive.glob('output/*.js');
console.log( process.platform);
archive.finalize();
/*
var listOfFiles = ["input.txt","mkdir.js"];

function compressFile(filename) {
    var compress = zlib.createGzip(),
        input = fs.createReadStream(filename),
        output = fs.createWriteStream(filename + '.zip');

    input.pipe(compress).pipe(output);

//    if (callback) {
        output.on('end', "callback");
//    }
}*/
//listOfFiles.forEach(compressFile);

/*var zipPaths = require('zip-paths');
zip = new zipPaths('out.zip');
 
zip.add('attendance/*.pdf', function(err) {
  
  zip.compress(function(err, bytes) {
    console.log("wrote %s bytes", bytes)
  });
});*/

