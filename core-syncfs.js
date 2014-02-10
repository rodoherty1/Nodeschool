var fs = require('fs');
var filename = process.argv[2];
var buffer = fs.readFileSync(filename);

var lines = buffer.toString().split('\n');
console.log(lines.length-1);

for (var i=0; i<lines.length; i++) {
//	console.log (i + ' ' + lines[i]);
}
