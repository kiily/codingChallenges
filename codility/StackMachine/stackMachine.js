
export function process(str) {
	const OVERFLOW_LOWER_BOUND = 0;
	const OVERFLOW_UPPER_BOUND = 4096; // 2^12
	let stack = [];
	if (!str.length) {
		return -1;
	}

	const isEmpty = () => {
		return stack.length === 0;
	};
    
	const peek = () => {
		return stack[stack.length -1];
	};

	const safePop = () => {
		if (isEmpty()) {
			throw new Error('Error, stack is empty');
		}
		return stack.pop();
	};
    
	const inRange = (result) => {
		return OVERFLOW_LOWER_BOUND <= result < OVERFLOW_UPPER_BOUND; 
	};
    

	const performInstruction = (instruction) => {
		const firstNum = safePop();
		const secondNum = safePop();
		let result;
		if (instruction === '+') {
			result = firstNum + secondNum;
		}
		if (instruction === '*') {
			result = firstNum * secondNum;
		}
		if (!inRange(result)) {
			throw new Error('Overflow');
		}
		stack.push(result);
	};
    
	const isDigit = (instruction) => {
		return /^\d+$/.test(instruction);
	};

	try {
		[...str].forEach((instruction) => {
			if (isDigit(instruction)) {
				const int = parseInt(instruction);
				stack.push(int);
			}
			if (instruction === '+' || instruction === '*') {
				performInstruction(instruction);
			}
		});
        
		if (isEmpty()) {
			throw new Error('Processing error');
		}
		return stack.pop();
	} catch(error) {
		return -1;
	}
}

const str = '12+';
// console.log(process(str));