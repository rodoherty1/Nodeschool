

function duckCount() {

	return arguments.reduce(function(prev, current, index, arr) {
		if (Object.prototype.hasOwnProperty.call(current, 'duck')) {
			++prev || prev;
	}, 0);

}

module.exports = duckCount


