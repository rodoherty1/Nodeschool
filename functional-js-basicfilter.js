
module.exports = function getShortMessages(messages) {
	var result = [];	
	messages.filter(function(o) {
		if (o.message.length < 50) {
			result.push(o.message);
		}
	});

	return result;
}


/*
Official Solution 

  module.exports = function getShortMessages(messages) {
    return messages.filter(function(item) {
      return item.message.length < 50
    }).map(function(item) {
      return item.message
    })
  }

*/

