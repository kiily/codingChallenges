import { solution } from './binaryGap';

describe('binaryGap', () => {
	it.each`
        input | result 
        ${9} | ${2}
        ${529} | ${4}
        ${20} | ${1}
        ${15} | ${0}
        ${32} | ${0}
        ${1041} | ${5}
        ${328} | ${2}
        ${561892} | ${3}
        ${1610612737} | ${28}
        `('gets max binary gap', ({ input, result}) => {
	expect(solution(input)).toBe(result);
});
});