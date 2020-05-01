import { mergeSortedArrays } from './mergeSortedArrays';

describe('mergeSortedArrays', () => {
	it.each`
        array1 | array2 | sorted
        ${[0, 1, 2]} | ${[2, 3, 4]} | ${[0, 1, 2, 2, 3, 4]}
        ${[0, 1, 2]} | ${[0, 1, 2]} | ${[0, 0, 1, 1, 2, 2]}
        ${[5, 3, 2]} | ${[4, 7, 6]} | ${[2, 3, 4, 5, 6, 7]}
        ${[0]} | ${[1]} | ${[0, 1]}
        ${[100, 1002, 20001]} | ${[101, 1003, 20002]} | ${[100, 101, 1002, 1003, 20001, 20002]}
        `('merges the sorted arrays', ({ array1, array2, sorted}) => {
	expect(mergeSortedArrays(array1, array2)).toEqual(sorted);
});
});