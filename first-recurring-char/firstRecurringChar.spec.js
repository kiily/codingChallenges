import { firstRecurringChar } from './firstRecurringChar';

describe('firstRecurringChar', () => {
	it.each`
        array1 | recurring 
        ${[0, 1, 2, 2]} | ${2}
        ${[0, 1, 2, 2, 3, 4]} | ${2}
        ${[0, 1, 2, 3, 3, 4]} | ${3}
        ${[0, 1, 2, 3, 4, 0]} | ${0}
        ${[0]} | ${undefined}
        ${[5, 3, 2]} | ${undefined}
        ${[]} | ${undefined}
        `('outputs the first recurring character', ({ array1, recurring}) => {
	expect(firstRecurringChar(array1)).toBe(recurring);
});
});