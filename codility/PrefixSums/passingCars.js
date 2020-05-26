function solution(A) {
	const length = A.length;
	if (length > 1000000000) {
		return -1;
	}
    
	let count = 0;
	const suffixSum = new Array(length + 1);
	// Traverse the array backwards and compute the suffix sum
	// at each step
	suffixSum[length] = 0;
	for (let i = length - 1; i >= 0; i--) {
		suffixSum[i] = A[i] + suffixSum[i+1];
		if (A[i] === 0) {
			count+= suffixSum[i];
		}
		if (count > 1000000000) return -1;

	}
	return count;
}



console.log(solution([0,1,0,1,1]));