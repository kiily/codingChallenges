// 10 --> 5 --> 16 --> null
// null terminated linkedList structure
// let myLinkedList = {
// 	head: {
// 		value: 10,
// 		next: {
// 			value: 5,
// 			next: {
// 				value: 16,
// 				next: null
// 			}
// 		}
// 	}
// };

import { DoublyNode } from './node.mjs';

class DoublyLinkedList {
	constructor(value) {
		this.head = new DoublyNode(value);
		this.tail = this.head;
		this.length = 1;
	}
    
	append(value) {
		const newNode = new DoublyNode(value);
		newNode.previous = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
    
	prepend(value) {
		const newNode = new DoublyNode(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}

	printList() {
		const array = [];
		let currentNode = this.head;
		while(currentNode !== null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
	}
    
	traverseToIndex(index) {
		let counter = 0;
		let currentNode = this.head;
		while(counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}
    
	insert(index, value) {
		if (!value) {
			throw new Error('Your value is empty');
		}
		if (index <= 0) {
			this.prepend(value);
			return this.printList();
		}
		if (index >= this.length) {
			this.append(value);
			return this.printList();
		}
		const newNode = new DoublyNode(value);
		// We grab the node before the index to add
		const leader = this.traverseToIndex(index - 1);
		const follower = leader.next;
		leader.next = newNode;
		newNode.next = follower;
		newNode.previous = leader;
		follower.previous = newNode;
		this.length++;
		return this.printList();
	}
    
	remove(index) {
		if (index <= 0) {
			this.head = this.head.next;
		}
		if (index >= this.length) {
			throw new Error('Index is out of bounds');
		}
		const leader = this.traverseToIndex(index -1);
		const nodeToDelete = leader.next;
		leader.next = nodeToDelete.next;
		nodeToDelete.next.previous = leader;
		this.length--;
		return this.printList();
	}
}

const classLinkedList = new DoublyLinkedList(10);
classLinkedList.prepend(1);
classLinkedList.insert(1, 3);
console.log(classLinkedList.append(5));
classLinkedList.remove(1);
console.log('classLinkedList', classLinkedList.printList());