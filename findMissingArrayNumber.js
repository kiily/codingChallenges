// How do you find the missing number in a given integer array of 1 to 100?
const array = [1, 2, 3, 4, 5, 7, 8];

function findMissingNumber(arr) {
    const totalCount = arr.length + 1;

    const expectedSum = totalCount * ((totalCount + 1 )/ 2);
    const actualSum = arr.reduce((acc, currentNum) => {
        return acc + currentNum
    }, 0);
    console.log('actual', actualSum);
    console.log('expected', expectedSum);
    return expectedSum - actualSum;
}

const missingNumber = findMissingNumber(array);
console.log("TCL: missingNumber", missingNumber)
