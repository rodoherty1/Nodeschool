


function reduce(arr, fn, initial) { 
	return (function myReduce(index, prev) {
		if (index === arr.length) return prev;
		return myReduce(index+1, fn(prev, arr[index], index, arr));
		})(0, initial);
} 
 
module.exports = reduce 

