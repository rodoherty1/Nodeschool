
function repeat(operation, num) {
	if (num <= 0) {
		return;
	} else {
		return function() {
			operation();
			return repeat(operation, --num);
		};
	}
}

function trampoline(fn) {
	while (fn && typeof fn === 'function') {
		fn = fn();
	}

	return;
}

module.exports = function (operation, num) {
	return trampoline(function() {
		return repeat(operation, num);
	});
}

