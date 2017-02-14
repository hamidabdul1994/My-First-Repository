/*var xlsx = require('xlsx');
var fs = require('fs');
var writeStream = fs.createWriteStream("test.xlsx");
var data = [[1,2,3],[true, false, null, 'sheetjs'],['foo','bar',new Date('2014-02-19T14:30Z'), '0.3']];
console.log(xlsx);
var buffer = xlsx.build({worksheets: [{"name":"mySheetName", "data": data}]});
console.log(buffer);
var header="Sr No"+"\t"+" Age"+"\t"+"Name"+"\n";
var row1 =['col1', 'col2', 'col3'].join('\t');
 // "0"+"\t"+" 21"+"\t"+"Rob"+"\n";
var row2 = "1"+"\t"+" 22"+"\t"+"bob"+"\n";
// console.log(row2);

writeStream.write(header);
writeStream.write(row1);
writeStream.write(row2);

writeStream.close();
// var workbook = xlsx.readFile('test.xlsx');
var xlsx = require('xlsx');
xlsx.readFile("file.xls");

var workbook = {};//xlsx.readFile('test.xlsx');
workbook.Sheets={"A1":"sheet"}
workbook.SheetNames=['A1']
var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var sheet = workbook.Sheets[workbook.SheetNames[0]];
//console.log(sheet.A1.v);
console.log(new Date());
for (var i = 2; i < 100000; i++) {
    for (var j = 0; j < 26; j++) {
        var str = Math.floor(Math.random() * 1E+10).toString();
        str += Math.floor(Math.random() * 1E+10).toString();
        sheet[alpha[j] + i] = {v: str, t: 's'};
    }
    for (; j < 49; j++) {
        var str = Math.floor(Math.random() * 1E+10).toString();
        str += Math.floor(Math.random() * 1E+10).toString();
        sheet['A' + alpha[j - 26] + i] = {v: str, t: 's'};
    }
}
xlsx.writeFile(workbook, 'rand.xlsx');
console.log(xlsx.readFile('test.xlsx'));
console.log("FIrst:: ",new Date());
*/

var Excel = require('exceljs');

var workbook = new Excel.Workbook();
workbook.creator = 'Me';
workbook.lastModifiedBy = 'Her';
workbook.created = new Date(1985, 8, 30);
workbook.modified = new Date();
workbook.lastPrinted = new Date(2016, 9, 27);
// Set workbook dates to 1904 date system
workbook.properties.date1904 = true;
workbook.views = [
  {
    x: 0, y: 0, width: 10000, height: 20000,
    firstSheet: 0, activeTab: 1, visibility: 'visible'
  }
]
var sheet = workbook.addWorksheet('My Sheet');

console.log(workbook);
