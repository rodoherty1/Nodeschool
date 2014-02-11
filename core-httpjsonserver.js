var http = require('http');
var url = require('url');

var port = process.argv[2];


function createJsonDate(iso) {

	var d = new Date(iso);

	return {'hour': d.getHours(),
		'minute': d.getMinutes(),
		'second': d.getSeconds()}; 
}

function createUnixTime(iso) {
	return { 'unixtime': new Date(iso).getTime() };
}


var getDate = function(urlProperties) {
	if (urlProperties.path.match(/.*parsetime/)) {
		return createJsonDate(urlProperties.query.iso); 
	}	
	else if (urlProperties.path.match(/.*unixtime/)) {
		return createUnixTime(urlProperties.query.iso);
	}
}


var server = http.createServer(function(request, response) {
	var urlProperties = url.parse(request.url, true);

	response.writeHead(200, {'Content-Type': 'application/json'});
	var result = getDate(urlProperties);
	response.end(JSON.stringify(result));
});

server.listen(port);

