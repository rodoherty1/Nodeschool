var fs = require('fs');
var path = require('path');

var dirname = process.argv[2];
var ext = process.argv[3];

var regex = new RegExp('^\.' + ext, 'g');

fs.readdir(dirname, function(err, list) {
	for (var i=0; i<list.length; i++) {
		var itemExt = path.extname(list[i]);
		if (regex.test(itemExt)) {
			console.log(list[i]);
		}
	}
});

