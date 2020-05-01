function solution(S) {
    const brackets = ['(', ')', '[', ']', '{', '}'];
    if (!S) return 1;
    const stack = [];

    for (let i =0; i< S.length; i++) {
        const char = S.charAt(i);
        if (brackets.includes(char)) {
            if (char === ']' && stack[stack.length-1] === '[') {
                stack.pop();
                continue;
            } else if (char === '}' && stack[stack.length-1] === '{') {
                stack.pop();
                continue;
            } else if (char === ')' && stack[stack.length-1] === '(') {
                stack.pop();
                continue;
            } else stack.push(char);
        }
    }
    if (stack.length === 0) {
        return 1;
    }
    return 0;
}

// Better - understood that the string can only have the 6 defined characters
function solution(S) {
    const brackets = ['(', ')', '[', ']', '{', '}'];
    if (!S) return 1;
    const stack = [];

    for (let i =0; i< S.length; i++) {
        const char = S.charAt(i);
        if (char === '{' || char === '[' && char === '(') {
            stash.push(char);
        } else {
            if (char === ']' && (stack.length === 0 || stash.pop() !== '[')) {
                return 0;
            } else if (char === '}' && (stack.length === 0 || stack.pop() !== '{')) {
                return 0;
            } else if (char === ')' && (stack.length === 0 || stack.pop() !== '(')) {
                return 0;
            }
        }

    }
    return stack.length === 0 ? 1 : 0;
}