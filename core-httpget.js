var http = require('http');

var url = process.argv[2];


var cb = function(response) {
	response.setEncoding('utf-8');

	response.on('data', function(data) {
		console.log(data);
	}); 
}

http.get(url, cb);


