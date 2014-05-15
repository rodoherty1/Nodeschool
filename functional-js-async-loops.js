

function loadUsers(userIds, load, done) {
	var users = [];
	var numResults = 0;

	userIds.forEach(function(userId, i) {
		load(userId, function(user) {
			users[i] = user;
			if (++numResults === userIds.length) {
				done(users);
			}
		});
	});
}

module.exports = loadUsers


