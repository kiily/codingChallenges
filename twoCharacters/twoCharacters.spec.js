import { twoCharacters } from './twoCharacters';

describe('twoCharacters', () => {
	it.each`
        string | length 
        ${'abaacdabd'} | ${4}
        ${'beabeefeab'} | ${5} 
        ${'bcbcbcbcbcbc'} | ${11}
        ${'abc'} | ${0}
        ${''} | ${0}
        `('outputs length of minimal alternating string', ({ string, length}) => {
	expect(twoCharacters(string)).toBe(length);
});
});