// https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/learn/lecture/8547214#overview

// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

export class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
	}
    
	add(data) {
		this.children.push(new Node(data));
	}

	remove(data) {
		this.children = this.children.filter(child => child.data !== data);
	}
}

export class Tree {
	constructor() {
		this.root = null;
	}
    
	traverseBF(func) {
		const breadthFirstArr = [this.root];
		while(breadthFirstArr.length) {
			const node = breadthFirstArr.shift();
			func(node);
			breadthFirstArr.push(...node.children);
		}

	}

	traverseDF(func) {
		const depthFirstArr = [this.root];
		while(depthFirstArr.length) {
			const node = depthFirstArr.shift();
			depthFirstArr.unshift(...node.children);
			func(node);
		}
	}
    
}