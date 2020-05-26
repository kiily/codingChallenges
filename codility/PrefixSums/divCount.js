function solution(A, B, K) {
	// O(1) solution
	// see explanation in notion https://www.notion.so/kiilysden/Codility-Problems-15cf291e85454b47b98257e9c392feb1
	const lowerBound = Math.ceil(A / K);
	const upperBound = Math.floor(B / K);
	return upperBound - lowerBound + 1;
}

console.log(solution(0, 6, 2));