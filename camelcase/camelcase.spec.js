import { camelCase } from './camelcase';

describe('camelcase', () => {
	it.each`
        string | expected 
        ${'abc'} | ${1}
        ${'aLongWord'} | ${3} 
        ${'camelCase'} | ${2}
        ${'aVeryLongCamelCaseIndeed'} | ${6}
        ${''} | ${0}
        ${'zYIM'} | ${4}
        ${'aVeryLongCamelCaseIndeedButLongerThanEverBefore'} | ${11}
        ${'aVeryLongCamelCaseIndeedButLongerThanEverBeforeToToToTo'} | ${15}
        ${'aVeryLongCamelCaseIndeedButLongerThanEverBeforeToToToToABCD'} | ${19}
        `('outputs number of words in camelcase string', ({ string, expected}) => {
	expect(camelCase(string)).toBe(expected);
});
});