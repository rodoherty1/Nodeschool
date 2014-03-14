

function duckCount() {
	var args = Array.prototype.slice.call(arguments);
	return args.reduce(function(prev, current, index, arr) {
		if (Object.prototype.hasOwnProperty.call(current, 'quack')) {
			prev++;
		} 
		return prev;
	}, 0);
}
/*
Official Solution
=================

  function duckCount() {
    return Array.prototype.slice.call(arguments).filter(function(obj) {
      return Object.prototype.hasOwnProperty.call(obj, 'quack')
    }).length
  }

*/

module.exports = duckCount


