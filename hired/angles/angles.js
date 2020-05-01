const solution = (angles) => {
	const stack = [];
	let finalAngles = '';

	const isStackEmpty = () => {
		return stack.length === 0;
	};
	if (angles[0] === '<') {
		finalAngles += '<';
		stack.push(angles[0]);
	} else if (angles[0] === '>') {
		finalAngles += '<>';
	}
	for(let i = 1; i < angles.length; i++) {
		const char = angles.charAt(i);
		finalAngles += char;
		if (char === '>') {
			if(isStackEmpty()) {
				finalAngles = `<${finalAngles}`;
			} else {
				stack.pop();
			}
		} else if (char === '<') {
			stack.push(char);
		}
	}
	while(!isStackEmpty()) {
		if (stack.pop() === '<') {
			finalAngles += '>';
		}
	}
	return finalAngles;
};

console.log('SOLUTION', solution('><<><'));
console.log('SOLUTION', solution('<'));
console.log('SOLUTION', solution('<<'));
console.log('SOLUTION', solution('>>>>>'));
console.log('SOLUTION', solution('>>>>><<<<'));
console.log('SOLUTION', solution('>>>><>'));
console.log('SOLUTION', solution('>>>><<<>'));