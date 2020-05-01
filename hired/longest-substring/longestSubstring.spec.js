import { longestSubstring } from './longestSubstring';

describe('longestSubstring', () => {
	it.each`
        string | length 
        ${'abaaaa'} | ${2}
        ${'beabeefeab'} | ${4} 
        ${'bcbcbcbcbcbcasw'} | ${5}
        ${'b'} | ${1}
        ${''} | ${0}
        `('outputs length of longest alternating subtring', ({ string, length}) => {
	expect(longestSubstring(string)).toBe(length);
});
});