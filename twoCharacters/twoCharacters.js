// https://www.hackerrank.com/challenges/two-characters/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=7-day-campaign
export function twoCharacters(str) {
	if (str.length <= 1) {
		return 0;
	}

	// Find all unique letters
	let uniqueLetters = [];
	for (let i = 0; i < str.length; i++) {
		const currentLetter = str[i];
		if (!uniqueLetters.includes(currentLetter)) {
			uniqueLetters.push(currentLetter);
		}
	}
	console.log('uniq', uniqueLetters);

	let combinations = [];
	uniqueLetters.forEach((letter, index) => {
		uniqueLetters.forEach((secLetter) => {
			if (letter !== secLetter) {
				combinations.push([letter, secLetter]);
			}
		});
		uniqueLetters.splice(index, 1);
	});
	let lengths = [];
	console.log('combinations', combinations);

	combinations.forEach((comb) => {
		let finalString = '';
		for (let i = 0; i < str.length; i++) {
			if (comb.indexOf(str[i]) > -1) {

				finalString += str[i];
				console.log(finalString);
			}
		}
		const reg1 = new RegExp(`${comb[0]}{2,}`);
		const reg2 = new RegExp(`/${comb[1]}{2,}`);
		console.log(reg1);
		const res = reg1.exec(finalString);
		console.log('res', res);
		// Should replace the letters that are not alternating
		finalString = finalString.replace(reg1, `${comb[0]}`);
		finalString = finalString.replace(reg2, `${comb[1]}`);
		console.log('final', finalString);
		lengths.push(finalString.length);
	});

	console.log(lengths);
	// Get all possible combinations of characters to delete
	// i.e. get all the possible pairs of characters from a string
	// Note that [a,b] and [b,a] are essentially the same pair
	// Return 0 if no pairs can be formed

	// Remove all letters but those pairs and record the length of each resulting string
	// keep these lengths in an array and use reduce to return the max length
}

twoCharacters('beabeefeab');