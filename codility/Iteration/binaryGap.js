export function solution(N) {
	// Check that value is in range to respect correctedness
	if (N === parseInt(N, 10) && N >= 1 && N <= 2147483647) {
		const binary = (N >>> 0).toString(2);
		const binarySplitArr = binary.split('1');
		let binaryGap = 0;
		binarySplitArr.forEach((item, index) => {
			if (item.length > binaryGap && index > 0 && index < binarySplitArr.length - 1) {
				binaryGap = item.length;
			}
		});
		return binaryGap;
	}
	return 0;
}
