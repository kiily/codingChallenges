
function canPlaceFlags(peaks, flagsToPlace) {
	let currentPosition = 1 - flagsToPlace;
	for (let i = 0; i < flagsToPlace; i++) {
		const flagDistance = currentPosition + flagsToPlace;
		if (flagDistance > peaks.length - 1) {
			return false;
		}
		currentPosition = peaks[flagDistance];
	}
	return currentPosition < peaks.length;
}

function solution(A) {
	const length = A.length;
	const peaks = [];
	// Signify that there are no further peaks
	let nextPeak = length;
	peaks[length-1] = nextPeak;
	// We ignore the first (> 0) and last items (-2) 
	// because they cannot be peaks
	for (let i = A.length - 2; i > 0; i--) {
		if (A[i-1] < A[i] && A[i+1] < A[i]) {
			nextPeak = i;
		}
		peaks[i] = nextPeak;
	}
	peaks[0] = nextPeak;
	let nextGuess = 0;
	let currGuess = 0;
	while(canPlaceFlags(peaks, nextGuess)) {
		currGuess = nextGuess;
		nextGuess++;
	}
	return currGuess;
}

solution([1,5,3,4,3,4,1,2,3,4,6,2]);
