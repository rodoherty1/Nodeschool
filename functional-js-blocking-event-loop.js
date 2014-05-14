

function repeat(operation, num) {
	if (num < 0) return;

	operation();

	if (num % 10 === 0) {
		var f = function() {
			repeat(operation, num--);
		}
		setTimeout(f, 1);
	} else {
		repeat(operation, num--);
	}
}

module.exports = repeat;



