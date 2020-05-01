export function depthFirstSearch(root) {
	if (root === null) return;
	root.visited = true;
	for (let n in root.adjacentList) {
		if (!n.visited) {
			n.visited = true;
			depthFirstSearch(n);
		}
	}
}