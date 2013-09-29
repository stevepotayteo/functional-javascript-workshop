function loadUsers(userIds, load, done) {
	var completed = 0;
	var users = [];

	// use forEach here to ensure parallel loading
	userIds.forEach(function(userId, index) {
		load(userId, function(user) { // load is a async function
			users[index] = user; // ensures it is returned in order
			// ensures callback only called on last user return
			if(++completed == userIds.length) done(users);
		})
	})
}

module.exports = loadUsers