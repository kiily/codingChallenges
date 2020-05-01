// Only 25%, failed most tests
function solution(A, B) {
    // Ordered by the position
   
    const alive = [];
    
    let activeFish = 0;
    // Push the first fish to the stack
    for (let i = 0; i < A.length; i++) {
        if (activeFish === 0 && B[i] === 0) {
            alive.push(i);
            activeFish++;
        } else {
            if (B[activeFish] !== B[i]) {
               if (A[activeFish] > A[i]) {
                    continue;
               } else {
                   activeFish = i;
               }
            } else {
                alive.push(activeFish)
                activeFish = i;
            } 
        }
    }
    // Number of alive fish
    return alive.length;
}

// Second solution; 50%
function solution(A, B) {
    const stack = [];
    let survivors = 0;
    for (let i =0; i < A.length; i++) {
        if (stack.length === 0 && B[i] === 0) {
            survivors++;
            continue;
        }
        if (B[i] === 1) {
            stack.push(A[i]);
        } else if (B[i] === 0) {
            let currFish = stack.pop();
            if (currFish > A[i]) {
                stack.push(currFish);
                continue;
            }
            while (stack.length !==0 && currFish < A[i]) {
                currFish = stack.pop()
            }
            survivors++;
        }
    }
    survivors += stack.length;
    return survivors;
}


// Solution implementation
function solution(A, B) {
    const stack = [];
   let survivors = 0;
   for (let i = 0; i < A.length; i++) {
       const weight = A[i];
       const direction = B[i];
       if (direction === 1) {
           stack.push(weight)
       } else {
           let weightDown = stack.length === 0 ? -1 : stack.pop();
           while(weightDown !== -1 && weightDown < weight) {
               weightDown = stack.length === 0 ? -1 : stack.pop();
           }
           if (weightDown === -1) {
               survivors += 1;
           } else {
               stack.push(weightDown);
           }
       }
   }
   return survivors + stack.length;
}