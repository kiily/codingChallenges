function maxChar(str) {
	const strMap = {};
	for(const char of str) {
		strMap[char] = strMap[char] + 1 || 1;
	}

	let max = 0;
	let maxChar = '';
	for(const char in strMap) {
		if (strMap[char] > max) {
			max = strMap[char];
			maxChar = char;
		}
	}

	return maxChar;
}

module.exports = maxChar;