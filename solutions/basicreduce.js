function countWords(inputWords) {
  return inputWords.reduce(function(previousValue, currentValue) {
	previousValue[currentValue] = ++previousValue[currentValue] || 1;
	return previousValue;
  }, {});
}

module.exports = countWords