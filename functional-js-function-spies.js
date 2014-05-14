

function Spy(target, method) {
	var result = {
		count : 0
	}

	var oldFunc = target[method];

	target[method] = function () {
		result.count+=1;
		return oldFunc.apply(target, arguments);
	}

	return result;
}

module.exports = Spy;


