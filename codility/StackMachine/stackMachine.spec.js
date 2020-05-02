import { process } from './stackMachine';

describe('stackMachine', () => {
	it.each`
        input | result 
        ${'12+'} | ${3}
        ${'1*'} | ${-1}
        ${'123+5'} | ${5}
        ${'13+62*7+*'} | ${76}
        ${'99*99*99*99*99*'} | ${81}
        ${'9*9*9*9*9*'} | ${-1}
        ${''} | ${-1}
        ${'11*22+'} | ${4}
        `('processes stack machine input', ({ input, result}) => {
	expect(process(input)).toBe(result);
});
});