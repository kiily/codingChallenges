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