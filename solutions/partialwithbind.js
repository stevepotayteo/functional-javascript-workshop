module.exports = function(namespace) {
	function log() {
		console.log.apply(null, arguments);
	}

	return log.bind(null, namespace);

	//shorter
//	return console.log.bind(console, namespace)
}