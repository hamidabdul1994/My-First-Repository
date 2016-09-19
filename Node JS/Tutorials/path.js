//console.log(path.resolve("./test"));
const path = require('path');

var pathString='/git/hooks/pre-commit/input.txt';

console.log("resolve : ",path.resolve(pathString));
console.log("basename : ",path.basename('git/name/myfile/'));
console.log("parse : ",path.parse(pathString));
console.log("format : ",path.format(path.parse(pathString)));

var temp;
var data = path.basename(pathString);
for(temp in data)
console.log(data.temp);

// var fs = require("fs");
// var content  = fs.readFileSync("mydata.json");
// console.log("FIle content"+content);
//
// var config = JSON.parse(content);
// var temp;
// for(temp in config)
// console.log("JOSN["+temp+"]:"+config[temp]);
// console.log("JSON File parsing::",config);
