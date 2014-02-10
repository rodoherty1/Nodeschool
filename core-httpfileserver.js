var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var filename = process.argv[3];

var server = http.createServer(function(request, response) {
	var r = fs.createReadStream(filename);
	r.pipe(response);
});

server.listen(port);

