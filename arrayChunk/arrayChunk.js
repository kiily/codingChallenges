/**
 * Solution 1
 */
// function chunk1(array, size) {
// 	const chunked = [];
// 	for (let item of array) {
// 		const last = chunked[chunked.length - 1];
// 		if (!last || last.length === size) {
// 			chunked.push([item]);
// 		} else {
// 			last.push(item);
// 		}
// 	}
// 	return chunked;
// }

/**
 * Solution 2
 */
function chunk(array, size) {
	const chunk = [];
	let index = 0;
	while(index < array.length) {
		chunk.push(array.slice(index, index + size));
		index += size;
	}
	return chunk;
}

module.exports = chunk;