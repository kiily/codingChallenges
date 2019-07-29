/**
 * 
 * The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
 * Given two integers x and y, calculate the Hamming distance.
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
export const hammingDistance = function(x, y) {
	function convertToBinary(n) {
		let bits = [];
		while (n !== 0) {
			bits.push(n % 2);
			n = Math.floor(n / 2);
		}
		return bits.reverse();
	}
    
	let binaryX = convertToBinary(x);
	let binaryY = convertToBinary(y);
    
	function compareLengths(binX, binY) {
		let count = 0;
		while( binX.length < binY.length) {
			binX.unshift(0);
		}
		while(binY.length < binX.length) {
			binY.unshift(0);
		}
		for (let i = 0; i < binX.length; i++) {
			if (binX[i] !== binY[i]) {
				count += 1;
			}
		}
		return count;
	}
	return compareLengths(binaryX, binaryY);
};