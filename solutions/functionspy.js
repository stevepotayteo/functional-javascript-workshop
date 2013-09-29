function Spy(target, method) {
	var _fn = target[method];
	var result = {
		count : 0
	};

	target[method] = function() {
		result.count++;
		return _fn.apply(target, arguments);
	};

	return result;
}

module.exports = Spy