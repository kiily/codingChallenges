// https://blog.bitsrc.io/implementing-heaps-in-javascript-c3fbf1cb2e65
// Can be implemented as arrays or linked lists but arrays are more common
class MinHeap {
  constructor() {
    /* Initialize heap with one dummy element, heap starts getting filled from 1 */
    this.heap = [null];
  }

  getMin() {
    /* Accessing the min element at index 1 of the array */
  }

  insert(node) {
    // Add node to heap array
    this.heap.push(node);

    // Find correct position for the new node
    if (this.heap.length > 1) {
      let currentNode = this.heap.length - 1;
      // Traversing up the parent node until current node is
      // is greater than the parent (currentNode/2)
      while (
        currentNode > 1 &&
        this.heap[Math.floor(currentNode / 2)] > this.heap[currentNode]
      ) {
        [this.heap[Math.floor(current / 2)], this.heap[current]] = [
          this.heap[current],
          this.heap[Math.floor(current / 2)],
        ];
        current = Math.floor(current / 2);
      }
    }
  }
}
