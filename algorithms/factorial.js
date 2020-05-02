
/**
 * Also O(n) as we are calling the functions as many times as the value
 * of the factorial
 */
function findFactorialRecursive(value) {
	if (value === 2) {
		return 2;
	} 
	return value * findFactorialRecursive(value - 1);
}

/**
 * My solution
 */
function findFactorialIterative(value) {
	let factorial = 1;
	for (let i = value; i > 0; i--) {
		factorial *= i;
	}
	return factorial;
}

/**
 * Shorter solution, we can ignore the 1 at the end
 * and just start our loop at two; also we do not need to
 * go in the reverse direction
 */
function findFactorialIterativeImproved(value) { // O(n)
	let factorial = 1;
	if (value === 2) {
		factorial = 2;
	}
	for (let i = 2; i <= value; i++) {
		factorial *= i;
	}
	return factorial;
}

console.log(findFactorialIterative(4));
console.log(findFactorialIterativeImproved(4));
console.log(findFactorialRecursive(4));