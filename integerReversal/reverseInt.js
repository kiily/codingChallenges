function reverseInt(n) {
	// O(n) solution
	const reversed = n.toString().split('').reverse().join('');
	return Math.sign(n) * parseInt(reversed);
}

module.exports = reverseInt;