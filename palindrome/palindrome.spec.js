import { palindrome } from './palindrome';

describe('palindrome', () => {
	it.each`
        string | isPalindrome 
        ${'aaaaaa'} | ${true}
        ${'bca'} | ${false} 
        ${'bcbcbcbcbcbc'} | ${false}
        ${'abba'} | ${true}
        ${'kayak'} | ${true}
        ${'1abc123'} | ${false}
        ${'1aa1'} | ${true}
        ${''} | ${true}
        `('outputs whether string is a palindrome', ({ string, isPalindrome}) => {
	expect(palindrome(string)).toBe(isPalindrome);
});
});