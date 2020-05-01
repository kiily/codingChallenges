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
	while(queue.length > 0) {
		const node = dequeue();
		node.marked = true;
		for (let n in node.adjancentList) {
			if (!n.marked) {
				n.marked = true;
				enqueue(n);
			}
		}
	}

}