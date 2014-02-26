var through = require('through');

var tr = through(write, end);

var buffers = [];

function write(buffer) {
	buffers.push(buffer);
}

function end() {
	console.log(Buffer.concat(buffers));
}

process.stdin.pipe(tr);



