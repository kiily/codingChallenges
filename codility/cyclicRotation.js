// JS ES6 Solution
function solution(A, K) {
    if (A.length === 0) {
        return [];
    }
    for (let i = 0; i < K; i++) {
        const lastEl = A.pop();
        A = [lastEl, ...A];
    }
    return A;
}

// Cyclic rotation can also be implemented with the modulus operator
function modulusSolution(A, K) {
    if (A.length === 0) {
        return [];
    }
    const array = [];
    for(let i = 0; i < A.length; i++) {
        // Trick to get the solution
        const newPosition = (i + K) % A.length;
        array[newPosition] = A[i]
    }
    return array
}

console.log(modulusSolution([3, 8, 9, 7, 6], 3));