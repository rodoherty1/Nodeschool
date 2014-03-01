
function repeat (operation, times) {
	if (times > 0) {
		operation();
		repeat(operation, times-1);
	}
}

module.exports = repeat
 
