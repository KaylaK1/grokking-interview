import { TreeNode } from "./binaryTreeTraversal";
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
class MinHeap extends TreeNode  {

  // Build Heap

  // Sift Down

  // Sift Up

  // Insert

  // Remove
}

const minHeap = new MinHeap(4);
minHeap.left = new MinHeap(50);
minHeap.left.left = new MinHeap(55);
minHeap.left.right = new MinHeap(90);
minHeap.right = new MinHeap(7);
minHeap.right.left = new MinHeap(87);


