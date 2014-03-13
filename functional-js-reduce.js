var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];


function countWords(inputWords) {
	return inputWords.reduce(function(prev, current, i, arr) {
		if (prev[current]) {
			prev[current]+=1;
		} else {
			prev[current] = 1;
		}
		return prev;
	}, {});
}

/*

Official Solution
=================

function countWords(arr) {
	return arr.reduce(function(countMap, word) {
		countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
		return countMap
	}, {}) // second argument to reduce initialises countMap to {}
}
*/  


module.exports = countWords;

