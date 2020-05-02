export const reverseStr = (str) => [...str].reverse().join('');

/**
 * My solution
 */
export const reverseStrRecursive = (str) => {
	if (str.length === 0) {
		return '';
	}
	return str.charAt(str.length-1) + reverseStrRecursive(str.substring(0, str.length - 1));
};

/**
 * More readable solution
 */
export const reverseStrRecursive2 = (str) => {
	if (str === '') {
		return '';
	}
	return reverseStrRecursive2(str.substring(1)) + str.charAt(0);
};

export const reverseStrLoop = (str) => {
	let reversed = '';
	for (let char of str) {
		reversed = char + reversed;
	}
	return reversed;
};