module.exports = function checkUsersValid(goodUsers) {
	return function(submittedUsers) {
		return submittedUsers.every(function(s) {
			return goodUsers.some(function (e) {
				return e.id === s.id;
			});
		});
	};
}


	

	
					
