
// Naive solution
function solution(N, A = []) {
    let counters = [];
    for(let i = 0; i < N; i++) {
        counters.push(0);
    }
    let max = 0;
    for(let i = 0; i < A.length; i++) {
        const X = A[i]
        if (X >=1 && X <= N) {
            counters[X - 1]++
            const newCounter = counters[X - 1];
            if (newCounter > max) {
                max = newCounter;
            }
            continue;
        }
        for(let i = 0; i < N; i++) {
            counters[i] = max;
        }

    }
    return counters;
}

// Improved solution
function solution(N, A) {
    let counters = [];
    for(let i = 0; i < N; i++) {
        counters.push(0);
    }
    let max = 0;
    let start = 0
    for(let i = 0; i < A.length; i++) {
        const X = A[i]
        if (X >=1 && X <= N) {
            if (start > counters[X-1]) {
                counters[X-1] = start + 1;
            } else {
                counters[X - 1]++
            }
            const newCounter = counters[X - 1];
            if (newCounter > max) {
                max = newCounter;
            }
            continue;
        }
        start = max;
        
    }
    for (let i = 0; i < N; i++) {
        if (counters[i] < start) {
            counters[i] = start
        }
    }
    return counters;
}

// Even shorter solution
// Improved solution
function solution(N, A) {
    let counters = [];
    for(let i = 0; i < N; i++) {
        counters.push(0);
    }
    let max = 0;
    let start = 0
    for(let i = 0; i < A.length; i++) {
        const X = A[i] - 1;
        if (X > N) start = max;
        else if (counters[X] < start) counters[X] = start + 1;
        else counters[X]++;
        if (i < N && counters[X] > max) max = counters[X];
    }
    for (let i = 0; i < N; i++) {
        if (counters[i] < start) {
            counters[i] = start
        }
    }
    return counters;
}