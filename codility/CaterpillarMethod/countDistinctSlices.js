function solution(M, A) {
	let totalSlices = 0;
	const inCurrentSlice = new Array(M+1).fill(false);
	let head = 0;
	for (let tail = 0; tail < A.length; tail++) {
		while(head < A.length && !inCurrentSlice[A[head]]) {
			inCurrentSlice[A[head]] = true;
			totalSlices += (head - tail) + 1;
			head++;
			if (totalSlices > 1000000000) {
				totalSlices = 1000000000;
			}
		}
		// Increment the tail when we hit a duplicate
		inCurrentSlice[A[tail]] = false;
	}
	return totalSlices;
}

solution(6, [2,3,1,7,4,9,7,3,5,5,8,7,1]);
