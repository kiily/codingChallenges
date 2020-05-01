/**
 * Merge two sorted arrays into a single one
 * Assumes input is never undefined and that arrays have numbers only
 */
export const mergeSortedArrays = (arr1, arr2) => [...arr1, ...arr2].sort((a,b) => a - b);