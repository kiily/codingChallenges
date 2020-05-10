let queue = [];

const enqueue = (node) => {
	queue.push(node);
};

const dequeue = () => {
	return queue.shift();
};

export function depthFirstSearch(root) {
	if (root === null) return;
	root.marked = true;
	enqueue(root);
	while(queue.length) {
		const node = dequeue();
		node.marked = true;
		for (let n in node.children) {
			if (!n.marked) {
				n.marked = true;
				enqueue(n);
			}
		}
	}

}