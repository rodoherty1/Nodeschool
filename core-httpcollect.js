var http = require('http');
var concat = require('concat-stream');

var url = process.argv[2];

var cb = function(response) {
	response.pipe(concat(function(data) {
		var s = data.toString();
		console.log(s.length);	
		console.log(s);	
	}));
}


http.get(url, cb);



