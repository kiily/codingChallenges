// https://www.hackerrank.com/challenges/camelcase/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
import { camelCase } from './camelcase';

describe('caesacamelCaserCypher', () => {
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