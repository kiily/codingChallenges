// How do you find the duplicate number on a given integer array? 
const array = [1, 2, 3, 4, 5, 6, 6, 7, 8];

function findDuplicateNumber(arr) {
	let popped = [];
	let duplicate;
	arr.forEach(num => {
		if (popped.find(poppedNum => poppedNum === num )) {
			duplicate = num;
		}
		popped.push(num);
	});
	return duplicate;
}

const duplicate = findDuplicateNumber(array);
console.log('Duplicate', duplicate);