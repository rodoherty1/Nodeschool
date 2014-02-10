
var http = require('http');
var concat = require('concat-stream');


var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var urls = [url1, url2, url3];
	
var results = [];

var async = function(url, index, cb) {
	http.get(url, function(response) {
		response.pipe(concat(function(data) {
			cb(data.toString(), index);
		}));
	});
}

var countResults = 0;
for (var i=0; i<urls.length; i++) {
	async(urls[i], i, function(data, index) {
		results[index] = data;
		countResults++;	
		if (countResults === urls.length) {
			results.forEach(function(result) {
				console.log(result);
			});
		}
	});
}


