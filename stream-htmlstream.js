var trumpet = require('trumpet');
var through = require('through');

var th = through(function(buf) {
	this.queue(buf.toString().toUpperCase());
});

var tr = trumpet();

var loud = tr.select('.loud').createStream();
loud.pipe(th).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);


