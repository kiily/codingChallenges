// Course solution
function solution(A) {
    let consecutiveSize = 0;
    let candidate = 0;
    for (item of A) {
        if (consecutiveSize === 0) {
            candidate = item;
            consecutiveSize++;
        } else if (candidate === item) {
            consecutiveSize++;
        } else {
            consecutiveSize--;
        }
    }
    
    let occurence = 0;
    let index = 0;
    for(let i =0; i < A.length; i++) {
        if (A[i] === candidate) {
            occurence++;
            index = i;
        }
    }
    
    return occurence > (A.length / 2) ? index : -1;
}