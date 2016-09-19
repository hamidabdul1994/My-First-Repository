//Buffer writing and printing
var buff = new Buffer(26);
var i;
buff.write("My buffer Data:");
console.log(buff.toString());

for(i=0;i<26;i++)
{
buff[i] = 97+i;
}
console.log(buff.toString("ascii"));

//Compare Code in buffer
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
}else if(result == 0){
   console.log(buffer1 +" is same as " + buffer2);
}else {
   console.log(buffer1 +" comes after " + buffer2);
}
