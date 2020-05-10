  
import {anagrams, anagramsObj, anagramsImproved} from './anagrams';

describe('anagrams', () => {
	it('anagrams function exists', () => {
		expect(typeof anagrams).toEqual('function');
	});
    
	it('"hello" is an anagram of "llohe"', () => {
		expect(anagrams('hello', 'llohe')).toBeTruthy();
	});
    
	it('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
		expect(anagrams('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
	});
    
	it('"One One" is not an anagram of "Two two two"', () => {
		expect(anagrams('One One', 'Two two two')).toBeFalsy();
	});
    
	it('"One one" is not an anagram of "One one c"', () => {
		expect(anagrams('One one', 'One one c')).toBeFalsy();
	});
    
	it('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
		expect(
			anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')
		).toBeFalsy();
	});

});

describe('anagramsObj', () => {
	it('anagrams function exists', () => {
		expect(typeof anagramsObj).toEqual('function');
	});
    
	it('"hello" is an anagram of "llohe"', () => {
		expect(anagramsObj('hello', 'llohe')).toBeTruthy();
	});
    
	it('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
		expect(anagramsObj('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
	});
    
	it('"One One" is not an anagram of "Two two two"', () => {
		expect(anagramsObj('One One', 'Two two two')).toBeFalsy();
	});
    
	it('"One one" is not an anagram of "One one c"', () => {
		expect(anagramsObj('One one', 'One one c')).toBeFalsy();
	});
    
	it('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
		expect(
			anagramsObj('A tree, a life, a bench', 'A tree, a fence, a yard')
		).toBeFalsy();
	});

});

describe('anagramsImproved', () => {
	it('anagrams function exists', () => {
		expect(typeof anagramsImproved).toEqual('function');
	});
    
	it('"hello" is an anagram of "llohe"', () => {
		expect(anagramsImproved('hello', 'llohe')).toBeTruthy();
	});
    
	it('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
		expect(anagramsImproved('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
	});
    
	it('"One One" is not an anagram of "Two two two"', () => {
		expect(anagramsImproved('One One', 'Two two two')).toBeFalsy();
	});
    
	it('"One one" is not an anagram of "One one c"', () => {
		expect(anagramsImproved('One one', 'One one c')).toBeFalsy();
	});
    
	it('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
		expect(
			anagramsImproved('A tree, a life, a bench', 'A tree, a fence, a yard')
		).toBeFalsy();
	});

});