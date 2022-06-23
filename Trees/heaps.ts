=
/**
 * Binary Heaps are complete binary trees. (totally filled - other than perhaps the last position on the rightmost side.)
 * Min-Heap elements are in ascending order - each node is smaller than it's children.
 *
 * Input: [8, 12, 23, 17, 31, 30, 44, 102, 18]
 * indices:0,  1,  2,  3,  4,  5,  6,   7,  8
 *
 * If the currentNode is 'i', to get it's children:
 * childOne = 2i + 1, childTwo = 2i + 2
 * Example: i = 0. childOne = index 1, childTwo = index 2
 *
 * parentNode = floor((i - 1) / 2)
 * Example: floor((1 - 1) / 2) = 0 (the parent node of 12 is 8)
 *          floor((8 - 1) / 2) = 3 (the parent node of 18 is 17)
 */
class MinHeap {
  heap: number[];

  constructor(array: number[]) {
    this.heap = this.buildHeap(array);
  }
  /** Build Heap O(n) time | O(1) space
   * Call siftDown on every parentNode starting with the last parentNode
   * transforming the array in-place
   * we calculate parentNodes from the array then look at the children nodes and swap / sift as needed. If there are no childNodes then it's in the correct position.
   * Everytime you swap a node you must compare it to the min of its childNodes
   * minHeaps in an array form are not 'sorted'
   */
  buildHeap(array: number[]) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    return array;
  }

  /** Sift down
   * Compare to its children nodes.
   *
   */
  siftDown() {}

  /** Sift Up
   * Compare to its parent nodes
   */
  siftUp() {}

  // O(1) time | O(1) space
  peek() {
    return this.heap[0];
  }

  /** Insert
   * Adds a node to the last node in the heap - the node with the left-most available link
   * Adding a node might not satisfy the min-heap property (every node must be <= it's children - is the parentNode < currentNode).
   * SiftUp - continually swap the currentNode with it's parent node until it's in the correct position.
   * We can append the new value to the array. Then use it's array index to calculate it's parentNode. If it's parent node is greater than the new value, swap them in the array.
   *
   */
  insert(value: number) {}


  /** Remove
   *
   */
  remove() {}

  /** Swap */
  swap() {}
}

// const minHeap = new MinHeap(4);
// minHeap.left = new MinHeap(50);
// minHeap.left.left = new MinHeap(55);
// minHeap.left.right = new MinHeap(90);
// minHeap.right = new MinHeap(7);
// minHeap.right.left = new MinHeap(87);


