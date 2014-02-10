
var mymodule = require('./filteredlsmodule');

var dirname = process.argv[2];
var extname = process.argv[3];


var cb = function (err, data) {
	if (err == undefined) {
		for (var i=0; i<data.length; i++) {
			console.log(data[i]);
		}
	} else {
		console.log('Error: ' + err);
	}

}

mymodule (dirname, extname, cb); 
