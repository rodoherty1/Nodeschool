

function getDependencies(tree) {

	function _getDependencies(subtree, arr) {
		subtree = subtree || {};
	
		Object.keys(subtree).forEach(function (e) {
			var versions = arr[e] || {};
			versions[subtree[e]['version']] = true;		
			arr[e] = versions;
			arr = _getDependencies(subtree[e]['dependencies'], arr);
		});

		return arr;
	}

	var arr = _getDependencies(tree['dependencies'], {});
	var result = [];

	Object.keys(arr).forEach(function (e) {
		Object.keys(arr[e]).sort().forEach(function(version) {
			result.push(e + '@' + version);	
		});
	});

	return result.sort();
}

module.exports = getDependencies

