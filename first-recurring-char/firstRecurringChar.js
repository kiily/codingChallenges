/**
 * Naive algorithm is O(n^2), this approach is more efficient O(n) time complexity
 * but it also requires a space complexity of O(n) as the seen Set may have n items
 * in the worst case.
 */
export const firstRecurringChar = (arr) => {
	if (!arr?.length) {
		return undefined;
	}
	const seen = new Set();
	for (const item of arr) {
		if (seen.has(item)) {
			return item;
		}
		seen.add(item);
	}
	return undefined;
};