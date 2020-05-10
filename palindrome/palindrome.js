/**
 * Considering '' to be a palindrome
 */
export const palindrome = (str) => str === [...str].reverse().join('');

export const palindromeAlt = (str) => [...str].every((value, index) => value === str[str.length - 1 -index]);