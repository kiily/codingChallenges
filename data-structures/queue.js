import { Node } from './node.mjs';

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}
    
	peek() {
		return this.first;
	}

	enqueue(value) {
		const newNode = new Node(value);
		if (this.isEmpty()) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;

		}
		this.length++;
		return this;
	}

	dequeue() {
		if (this.isEmpty()) {
			return null;
		}
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.length--;
		return this;
	}

	isEmpty() {
		return this.length === 0;
	}
}

const myStack = new Queue();
console.log('myStack', myStack.enqueue('udemy'));
console.log('myStack', myStack.enqueue('google'));
console.log('myStack', myStack.enqueue('google2'));
console.log('myStack', myStack.peek());
console.log('myStack', myStack.dequeue());