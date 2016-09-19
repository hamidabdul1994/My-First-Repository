var os = require("os");

// Endianness
console.log('endianness : ' + os.endianness());

// OS type
console.log('type : ' + os.type());

// OS platform
console.log('platform : ' + os.platform());

// Total system memory
console.log('total memory : ' + os.totalmem() + " bytes.");

// Total free memory
console.log('free memory : ' + os.freemem() + " bytes.");

//Average Time
console.log("Average time : " + os.loadavg());

//CPU time
console.log("CPU info : " + (os.cpus()));

//NIC
console.log("NIC lis" + os.networkInterfaces().eth0);

var network = os.networkInterfaces();
var temp;
for(temp in network)
console.log(network[temp]);
