var fs = require('fs');
var path = require('path');


module.exports = function(dirname, extname, cb) {
	var regex = new RegExp('^\.' + extname, 'g');

	var result = [];
	
	fs.readdir(dirname, function(err, list) {
		if (err == undefined) {
			for (var i=0; i<list.length; i++) {
				var itemExt = path.extname(list[i]);
				if (itemExt == '.' + extname) {
					result.push(list[i]);
				}
			}
			cb(null, result);
		} else {
			cb(err);
		}

	});
}

