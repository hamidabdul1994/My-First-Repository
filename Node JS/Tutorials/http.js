var http = require("http");
var app= http.createServer(function(req,res){
debugger;
res.writeHead(200,{"content-type":"text/plain"});
res.end("done");
debugger;
});
app.listen(3030);
