var fs = require('fs');
//console.log(process.argv[2]);
var print = fs.readFileSync(process.argv[2]);
var str = print.toString();
var test = str.split('\n');
console.log(test.length - 1);