export class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
	insert(data) {
		if (data < this.data && this.left) {
			this.left.insert(data);
		} else if (data < this.data) {
			this.left = new Node(data);
		} else if (data > this.data && this.right) {
			this.right.insert(data);
		} else if (data > this.data) {
			this.right = new Node(data);
		}
	}
}


export function validate(node, min = null, max = null) {
	// If we have a max value and our node is out of that bound
	if (max !== null && node.data > max) {
		return false;
	}
	if (min !== null && node.data < min) {
		return false;
	}
	if (node.left && !validate(node.left, min, node.data)) {
		return false;
	}
	if (node.right && !validate(node.right, node.data, max)) {
		return false;
	}
	return true;
}