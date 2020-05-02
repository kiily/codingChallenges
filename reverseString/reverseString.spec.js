import { reverseStr, reverseStrRecursive } from './reverseString';

describe('reverseStr', () => {
	it.each`
        string | reverse 
        ${'aaaaaa'} | ${'aaaaaa'}
        ${'bca'} | ${'acb'} 
        ${'bcbcbcbcbcbc'} | ${'cbcbcbcbcbcb'}
        ${'abc'} | ${'cba'}
        ${'1abc'} | ${'cba1'}
        ${'1abc123'} | ${'321cba1'}
        ${''} | ${''}
        `('outputs the reversed string', ({ string, reverse}) => {
	expect(reverseStr(string)).toBe(reverse);
});
});

describe('reverseStrRecursive', () => {
	it.each`
        string | reverse 
        ${'aaaaaa'} | ${'aaaaaa'}
        ${'bca'} | ${'acb'} 
        ${'bcbcbcbcbcbc'} | ${'cbcbcbcbcbcb'}
        ${'abc'} | ${'cba'}
        ${'1abc'} | ${'cba1'}
        ${'1abc123'} | ${'321cba1'}
        ${''} | ${''}
        `('outputs the reversed string', ({ string, reverse}) => {
	expect(reverseStrRecursive(string)).toBe(reverse);
});
});