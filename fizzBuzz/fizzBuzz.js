/* First solution */
function fizzBuzz(n) {
	for (let i = 1; i <= n; i++) {
		// or i % 15 === 0
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('fizzbuzz');
		} else if (i % 3 === 0) {
			console.log('fizz');
		} else if (i % 5 === 0) {
			console.log('buzz');
		} else {
			console.log(i);
		}
	}
}

module.exports = fizzBuzz;