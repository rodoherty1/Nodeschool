var http = require('http');
var through = require('through');
var port = process.argv[2];

var tr = through(function (buf) {
	this.queue(buf.toString().toUpperCase());
});

var server = http.createServer (function(req, res) {
	if (req.method === 'POST') {
		req.pipe(tr).pipe(res);	
	}
	res.end();
});

server.listen(port);


