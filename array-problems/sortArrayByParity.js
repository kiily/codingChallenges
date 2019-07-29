/**
 * 
 * Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = function(A) {
	let evenArray = [];
	let oddArray = [];
	for (let i = 0; i < A.length; i++) {
		if ((A[i] % 2) === 0) {
			evenArray.push(A[i]);
		} else {
			oddArray.push(A[i]);
		}
	}
	const finalArr = [...evenArray, ...oddArray];
	return finalArr;
};