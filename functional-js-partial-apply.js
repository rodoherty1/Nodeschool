var slice = Array.prototype.slice;

var logger = function(namespace) {
	return function () {
		console.log.apply(console, [namespace].concat(slice.call(arguments)));	
	}
}


module.exports = logger

