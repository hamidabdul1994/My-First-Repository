console.log( __filename );

console.log(__dirname);

function sayHello()
{
  console.log("hello");
}

var t = setTimeout(sayHello ,2000);
//console.log(t);
clearTimeout(t);

function printHello(){
   console.log( "Hello, World interval:::");
   setTimeout(sayHello ,1000);
}
// Now call above function after 2 seconds
setInterval(printHello, 2000);
