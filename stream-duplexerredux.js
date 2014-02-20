var duplexer = require('duplexer');
var through = require('through');

module.exports = function(counter) {

	var counts = {};
	var tr = through(write, end);
	
	return duplexer(tr, counter);

	function write (buf) {
		counts[buf.country] = (counts[buf.country] || 0) + 1;
	}
	
	function end() {
		counter.setCounts(counts);
	}
}
