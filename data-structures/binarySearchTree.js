class BinaryTreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}



class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const newNode = new BinaryTreeNode(value);
		if (!this.root) {
			this.root = newNode;
		} else {
			let currentNode = this.root;
			while(true) {
				if (value === currentNode.value) {
					return 'Value already in tree';
				}
				if (value < currentNode.value) {
					// Go left
					if(!currentNode.left) {
						currentNode.left = newNode;
						return this;
					}
					currentNode = currentNode.left;
				}
				if (value > currentNode.value) {
					// Go right
					if (!currentNode.right) {
						currentNode.right = newNode;
						return this;
					}
					currentNode = currentNode.right;
				}
			}
		}
	}

	lookup(value) {
		if (!this.root) {
			return null;
		} else {
			let currentNode = this.root;
			// Iterating with divide and conquer, we make a decision at every node
			while(currentNode) {
				if (value === currentNode.value) {
					return currentNode;
				} else if (value < currentNode.value) {
					currentNode = currentNode.left;
				} else if (value > currentNode.value) {
					currentNode = currentNode.right;
				}
			}
			return null;
		}
	}

	remove(value) {
		if (!this.root) {
			// No items to remove
			return false;
		} else {
			let currentNode = this.root;
			let parentNode = null;
			while(currentNode) {
				if (value < currentNode.value) {
					// Go left
					parentNode = currentNode;
					currentNode = currentNode.left;
				} else if (value > currentNode.value) {
					// Go right
					parentNode = currentNode;
					currentNode = currentNode.right;
				} else if (value === currentNode.value) {
					// Match so let's delete
					// 1: No right child
					if (currentNode.right === null) {
						if (parentNode === null) {
							// We are modifying the root node
							this.root = currentNode.left;
						} else {
							// If parent > current value, make current left child
							// a left child of parent
							if (currentNode.value < parentNode.value) {
								parentNode.left = currentNode.left;
							}
							// If parent < current value, make the current left child a right child of parent 
							else if (currentNode.value > parentNode.value) {
								parentNode.right = currentNode.left;
							}
						}
					
					} else if (currentNode.right.left === null) {
					// 2: Right child which does not have a left child
						if (parentNode === null) {
							// We are modifying the root node
							this.root = currentNode.right;
						} else {
							// Make the left side of the child which will replace the currentNode
							// equal to the left side of the current node
							currentNode.right.left = currentNode.left;
							// If parent > current value, make current right child
							// a left child of parent
							if (currentNode.value < parentNode.value) {
								parentNode.left = currentNode.right;
							}
							// If parent < current value, make the current right child a right child of parent 
							else if (currentNode.value > parentNode.value) {
								parentNode.right = currentNode.right;
							}
						}
					}
					// 3: Right child that has left child
					else {
						// Find the right child's left most child
						let leftmost = currentNode.right.left;
						let leftmostParent = currentNode.right;
						while(leftmost.left !== null) {
							leftmostParent = leftmost;
							leftmost = leftmost.left;
						}

						// Now the parent's left subtree is now leftmost's right subtree
						leftmostParent.left = leftmost.right;
						leftmost.left = currentNode.left;
						leftmost.right = currentNode.right;

						if (parentNode === null) {
							this.root = leftmost;
						} else {
							if (currentNode.value < parentNode.value) {
								parentNode.left = leftmost;
							} else if (currentNode.value > parentNode.value) {
								parentNode.right = leftmost;
							}
						}
					}
					return true;
				} 
			}
		}
	}
	
	breadthFirstSearch() {
		let currentNode = this.root;
		let list = [];
		let queue = [currentNode];
		while(queue.length) {
			const currentNode = queue.shift();
			list.push(currentNode.value);
			if (currentNode.left) {
				queue.push(currentNode.left);
			}
			if (currentNode.right) {
				queue.push(currentNode.right);
			}
		}
		return list;
	}

	breadthFirstSearchRecursive(queue, list) {
		if (!queue.length) {
			return list;
		}
		let currentNode = queue.shift();
		list.push(currentNode.value);
		if (currentNode.left) {
			queue.push(currentNode.left);
		}
		if (currentNode.right) {
			queue.push(currentNode.right);
		}
		return this.breadthFirstSearchRecursive(queue, list);
	}

	DFSInOrder() {
		const traverseInOrder = (node, list) => {
			if (node.left) {
				traverseInOrder(node.left, list);
			}
			list.push(node.value);
			if (node.right) {
				traverseInOrder(node.right, list);
			}
			return list;
		};
		return traverseInOrder(this.root, []);
	}

	DFSPostOrder() {
		const traversePostOrder = (node, list) => {
			if (node.left) {
				traversePostOrder(node.left, list);
			}
			if (node.right) {
				traversePostOrder(node.right, list);
			}
			list.push(node.value);
			return list;
		};
		return traversePostOrder(this.root, []);
		
	}

	DFSPreOrder() {
		// Same as in order so except we push first
		const traversePreOrder = (node, list) => {
			list.push(node.value);
			if (node.left) {
				traversePreOrder(node.left, list);
			}
			if (node.right) {
				traversePreOrder(node.right, list);
			}
			return list;
		};
		return traversePreOrder(this.root, []);
		
	}
}

/**
 * Used to print the tree
 */
function traverse(node) {
	const tree = { value: node.value};
	tree.left = node.left === null ? null : traverse(node.left);
	tree.right = node.right === null ? null : traverse(node.right);
	return tree;
}
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(JSON.stringify(traverse(tree.root)));
// console.log(tree.breadthFirstSearch());
// console.log(tree.breadthFirstSearchRecursive([tree.root], []));
console.log(tree.DFSInOrder());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
