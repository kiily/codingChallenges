
export function caesarCypher(string, factor) {
	if (factor === 0) {
		return string;
	}
	const totalChars = 26; 
	const LOWERCASE_LOWER = 'a'.charCodeAt(0);
	const LOWERCASE_UPPER = 'z'.charCodeAt(0);
	const UPPERCASE_LOWER = 'A'.charCodeAt(0);
	const UPPERCASE_UPPER = 'Z'.charCodeAt(0);

	factor %= totalChars;
	let cypherStr = '';
	for(let i = 0; i < string.length; i++) {
		const charCode = string.charCodeAt(i);
		let next = charCode + factor;
		if (charCode >= LOWERCASE_LOWER && charCode <= LOWERCASE_UPPER) {
			if (next > LOWERCASE_UPPER) {
				next = LOWERCASE_LOWER + next - LOWERCASE_UPPER -1;
			}
			cypherStr += String.fromCharCode(next);
		} 
		else if (charCode >= UPPERCASE_LOWER && charCode <= UPPERCASE_UPPER) {
			if (next > UPPERCASE_UPPER) {
				next = UPPERCASE_LOWER + next - UPPERCASE_UPPER-1;
			}
			cypherStr += String.fromCharCode(next);

		} else {
			cypherStr += string[i];
		}
	}
	return cypherStr;

}

console.log(caesarCypher('b', 3));