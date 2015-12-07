//console.log(process.argv[2])
var fileName = process.argv[2];
var fs = require('fs');

var buffer = fs.readFile(fileName);

var str = buffer.toString();

var lines = str.split('\n');

var numLines = lines.length - 1;

console.log(numLines);

