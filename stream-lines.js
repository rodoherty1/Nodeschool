var through = require('through');
var split = require('split');

var isUpperCase = Number(1);

var write = function(buf) {
	isUpperCase = 1 - isUpperCase;
	if (isUpperCase === 1) {
		this.queue(buf.toString().toUpperCase() + '\n');
	} else {
		this.queue(buf.toString().toLowerCase() + '\n');	
	}
}

var tr = through(write);

process.stdin.pipe(split())
	.pipe(tr)
	.pipe(process.stdout);

