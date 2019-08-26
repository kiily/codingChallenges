// https://www.hackerrank.com/challenges/camelcase/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
const UPPERCASE_LOWER = 'A'.charCodeAt(0);
const UPPERCASE_UPPER = 'Z'.charCodeAt(0);

export function camelCase(str) {
	if (str === '') {
		return 0;
	}
	// Total words start at one; then forEach capital letter we add a word
	let totalWords = 1;
	for (let i = 0; i < str.length; i++) {
		const charCode =  str.charCodeAt(i);
		if (charCode >= UPPERCASE_LOWER && charCode <= UPPERCASE_UPPER) {
			totalWords++;
		}
	}
	return totalWords;
}