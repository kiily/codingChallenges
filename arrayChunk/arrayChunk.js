/**
 * Solution 1
 */
function chunk(array, size) {
	const chunked = [];
	for (let item of array) {
		if (!chunked[chunked.length - 1] || chunked[chunked.length - 1].length === size) {
			chunked.push([item]);
		} else {
			chunked[chunked.length - 1].push(item);
		}
	}
	return chunked;
}

module.exports = chunk;