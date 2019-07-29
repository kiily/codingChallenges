let array = [1,2,3,3];

const repeatedNTimes = function(A) {
	let visited = [];
	const repeated = A.filter( el => {
		if (visited.findIndex(el2 => el === el2 ) > -1) {
			return true;
		}
		visited.push(el);
		return false;
	});
	return repeated[0];
};

const repeated = repeatedNTimes(array);
console.log('REPEATED SOLUTION', repeated);