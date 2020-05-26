function solution(A, B) {
	let lastEndSegment = -1;
	let chosenCount = 0;
	for (let i = 0; i < A.length; i++) {
		if (A[i] > lastEndSegment) {
			chosenCount++;
			lastEndSegment = B[i];
		}
	}
	return chosenCount;
}

console.log(solution([1,3,7,9,9], [5,6,8,9,10]));
