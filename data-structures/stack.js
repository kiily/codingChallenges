import { Node } from './node.mjs';

class StackLinkedList {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}
    
	peek() {
		return this.top;
	}

	push(value) {
		const newNode = new Node(value);
		if (this.isEmpty()) {
			this.bottom = newNode;
			this.top = newNode;
		} else {
			const holdingPointer = this.top;
			this.top = newNode;
			this.top.next = holdingPointer;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.top) {
			return null;
		}
		// If there is only one item
		if (this.top === this.bottom) {
			this.bottom = null;
		}
		const holdingPointer = this.top;
		this.top = holdingPointer;
		this.length--;
		return holdingPointer;
	}

	isEmpty() {
		return this.length === 0;
	}
}

const myStack = new StackLinkedList();
console.log('myStack', myStack.push('udemy'));
console.log('myStack', myStack.peek());
console.log('myStack', myStack.pop());

class StackArray {
	constructor() {
		this.stack = [];
	}
    
	get length() {
		return this.stack.length;
	}
	peek() {
		return this.stack[this.length -1];
	}

	push(value) {
		this.stack.push(value);
		return this;
	}

	pop() {
		if (this.isEmpty()) {
			return null;
		}
		const popped = this.stack.pop();
		return popped;
	}

	isEmpty() {
		return this.length === 0;
	}
}

const myStackArray = new StackArray();
console.log('myStackArray', myStackArray.push('udemy'));
console.log('myStackArray', myStackArray.peek());
console.log('myStackArray', myStackArray.pop());