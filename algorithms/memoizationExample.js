function memoizedAddTo80() {
	let cache = {};
	return (n) => {
		if (n in cache) {
			// O(1) property access if item is present in the cache
			return cache[n];
		}
		console.log('Calculation below could take a long time');
		cache[n] = n + 80;
		return cache[n];
	};
}

const memoized = memoizedAddTo80();
console.log(memoized(5));
console.log(memoized(5));