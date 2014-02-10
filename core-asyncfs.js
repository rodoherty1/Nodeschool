var fs = require('fs');

var filename = process.argv[2];


var cb = function(err, data) {
	var lines = data.toString().split('\n');
	console.log(lines.length-1);
}


var buffer = fs.readFile(filename, cb);

