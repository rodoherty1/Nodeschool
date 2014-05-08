module.exports = function (arr, f) {
	return arr.reduce(function (p, c, i, a) {
		p.push(f(c));
		return p;
	}, []);
}

