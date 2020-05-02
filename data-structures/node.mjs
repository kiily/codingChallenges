
export class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

export class DoublyNode extends Node {
	constructor(value) {
		super(value);
		this.previous = null;
	}
}
