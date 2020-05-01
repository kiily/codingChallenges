const arr = [3, 1, 2, 4, 3];

// Solution that performs in O(n^2)
function equilibriumN2(array) {
    if (array.length < 2 || array.length > 100000) {
        return;
    }
    if (array.length === 2) {
        return Math.abs(array[0] - array[1]);
    }
    let absDiff = Infinity;
    for (let i = 1; i < array.length-1; i++) {
        const leftSum = array.slice(0, i).reduce((acc, val) => acc + val, 0);
        const rightSum = array.slice(i).reduce((acc, val) => acc + val, 0);
        const newDiff = Math.abs(leftSum - rightSum);
        if (newDiff < absDiff) {
            absDiff = newDiff;
        }
    }
    return absDiff;
}


const eqN2 = equilibriumN2(arr);
console.log('EQUILIBRIUM', eqN2);

function equilibrium(array) {
    if (array.length < 2 || array.length > 100000) {
        return;
    }
    if (array.length === 2) {
        return Math.abs(array[0] - array[1]);
    }
    let absDiff = Infinity;
    let leftWeight = array[0];
    let rightWeight = array.slice(1).reduce((acc, val) => acc + val, 0);
    for (let i = 1; i < array.length -1 ; i++) {
        let newDiff = Math.abs(leftWeight - rightWeight);
        if (newDiff < absDiff) {
            absDiff = newDiff;
        }
        leftWeight += array[i];
        rightWeight -= array[i];
    }
    return absDiff;
}
const arr2 = [5, 6, 2, 4, 1]
const eq = equilibrium(arr2);
console.log('EQUILIBRIUM', eq);