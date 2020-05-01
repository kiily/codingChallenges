// Explanation - https://codereview.stackexchange.com/questions/220228/longest-substring-without-repeating-characters-in-js
export const longestSubstring = (s) => {
	let longest = '';
	let start = 0;
	const seen = {};
	[...s].forEach((char, i) => {
		if (char in seen && start <= seen[char]) {
			longest = Math.max(i - start, longest);
			start = seen[char] + 1;
		}
		seen[char] = i;
	});
	return Math.max(s.length - start, longest);
};
