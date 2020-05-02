/**
 * Considering '' to be a palindrome
 */
export const palindrome = (str) => str === [...str].reverse().join('');