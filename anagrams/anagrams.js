/**
 * My solution
 */
export function anagrams(stringA, stringB) {
	// No punctuation or spaces considered, no lowercase/uppercase diff
	const cleanStr = (str) => {
		const regex = /[^\w]/g;
		return str.replace(regex, '').toLowerCase();
	};
	const cleanStringA = cleanStr(stringA);
	const cleanStringB = cleanStr(stringB);
	if (cleanStringA.length !== cleanStringB.length) {
		return false;
	}
	const stringMap = {};
	for (const char of cleanStringA) {
		if (stringMap[char]) {
			stringMap[char] = stringMap[char] + 1;
		} else {
			stringMap[char] = 1;
		}
	}
    
	for (const char of cleanStringB) {
		if (stringMap[char]) {
			if (stringMap[char] === 0) {
				return false;
			} 
			stringMap[char] = stringMap[char] - 1;
		} else {
			return false;
		}
	}
	return true;
}

/**
 * Alternative solution using objects but has 3 loops
 */
export function anagramsObj(stringA, stringB) {
	const buildCharMap = (str) => {
		let charMap = {};
		const regex = /[^\w]/g;
		str = str.replace(regex, '').toLowerCase();
		for(const char of str) {
			charMap[char] = charMap[char] + 1 | 1;
		}
		return charMap;
	};

	const aCharMap = buildCharMap(stringA);
	const bCharMap = buildCharMap(stringB);
    
	if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
		return false;
	}

	for(let key in aCharMap) {
		if (aCharMap[key] !== bCharMap[key]) {
			return false;
		}
	}
	return true;
}

/**
 * Improved readability alternative solution
 */
export function anagramsImproved(stringA, stringB) {
	const cleanStr = (str) => {
		const regex = /[^\w]/g;
		return [...str.replace(regex, '').toLowerCase()].sort().join('');
	};
	return cleanStr(stringA) === cleanStr(stringB);
}