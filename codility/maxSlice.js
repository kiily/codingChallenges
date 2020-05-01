// Initial naive algo, no hints; O(n^2) i.e. not the most efficient

function solution(A) {
    // A[i] --> daily stock price of a stock for a day; each i corresponds to a day
    const totalDays = A.length;
    // shares bought on day P and sold on day Q
    // if P < Q --> if A[Q] > A[P] --> profit A[Q] - A[P]
    // else loss A[P] - A[Q]
    
    let highestProfit =0;
    // return the maximum profit or 0 if there is no way to profit
    // naive solution would be to go over the array twice and combine all days with one another
    // and calculate the profit --> if the newly calculated profit is bigger than the previous one,
    // we replace; first solution, quadratic, not the best but it is a solution
    // no need to calculate losses as we are only interested in the profit scenario
    for (let i =0; i < totalDays; i++) {
        for (let j =0; j < totalDays; j++) {
            // no point calculating the same interval
            if (i >= j) continue;
            if (A[j] >= A[i]) {
                const newProfit = A[j] - A[i];
                if (newProfit > highestProfit) {
                    highestProfit = newProfit;
                }
            }
        }
    }
    
    return highestProfit;
}

// Kadane's algorithm - o(n)
function solution(A) {
    let globalMax = 0;
    let localMax = 0;
    
    for(let i = 1; i < A.length; i++) {
        // Delta calculation
        const delta = A[i] - A[i-1];
        localMax = Math.max(delta, localMax + delta);
        globalMax = Math.max(localMax, globalMax);
    }
    return globalMax;
}
