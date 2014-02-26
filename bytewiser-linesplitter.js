var fs = require('fs');

var cb = function(err, buffer) {
	var start = 0;
		
	for (var i=0; i<buffer.length ; i++) {
		if (buffer[i] === 10) {
			console.log(buffer.slice(start, i));
			start = i+1;
		}
	}
	console.log(buffer.slice(start)); 
}

fs.readFile(process.argv[2], cb);
