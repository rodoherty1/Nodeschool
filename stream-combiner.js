var split = require('split');
var combiner = require('stream-combiner');
var through = require('through');
var zlib = require('zlib');

module.exports = function () {
	var tr = through(write, end);
	var books;

	return combiner(
           split(),
           tr,
           zlib.createGzip()
	);

	function write(buf) {
		if (buf.length === 0) { return; }

		var row = JSON.parse(buf);

		switch (row['type']) {
			case 'book' : 
				books.books.push(row['name']);
				break;
			case 'genre' :
				if (books) {
					this.queue(JSON.stringify(books) + '\n');
				}

				books = {
					'name' : row['name'],
					'books' : []
				}
				break;
		}
	}

	function end() {
		if (books) {
			this.queue(JSON.stringify(books) + '\n');
		}
		this.queue(null);
	}
}


