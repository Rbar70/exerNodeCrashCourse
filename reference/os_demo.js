const { Console } = require('console');
const os = require('os');
const { memoryUsage } = require('process');

//Platform
console.log(os.platform());

// CPC arch
console.log(os.arch());

//cpu core
console.log(os.cpus());

//free memory
console.log(os.freemem());

//total mem
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

//uptime
console.log(os.uptime());
