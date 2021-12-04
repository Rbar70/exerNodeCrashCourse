const path = require('path');

// Base file name
console.log(path.basename(__filename));

// Dir name
console.log(path.dirname(__filename));

//file Ext

console.log(path.extname(__filename));

//crt Path obj

console.log(path.parse(__filename).base);

// Concenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));