function findGreatestCommonDivisor(a, b) {
	if (b === 0) {
		return a;
	}
	return findGreatestCommonDivisor(b, a%b);
}

// We want to find the least common multiple (LCM)
function solution(N, M) {
	return N / findGreatestCommonDivisor(N, M);
}

console.log(solution(10,4));