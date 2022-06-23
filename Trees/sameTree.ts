/** sameTree.ts
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 * They are considered the same if they are structurally identical and the nodes have the same value.
 *
 * Examples:
 * Input: p = [1,2,3], q = [1,2,3] Output: True
 * Input: p = [1,2], q = [1,null,true] Output: False
 * Input: p = [1,2,1], q = [1,1,2] Output: false
 *
 * idea: inOrderTraversal on each tree, outputing the elements to an array, then compare the array: O(nlogn) + O(n) Time | O(2n) space
 */

// leetcode binary tree node
class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;


  constructor(value?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.value = (value === undefined ? 0 : value);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }

  // inOrderTraversal calling a helper function to write the value to an array
  inOrderTraversal(node: TreeNode | null, treeArray: number[]) {
    if (node !== null) {
      this.inOrderTraversal(node.left, treeArray);
      treeArray.push(node.value);
      this.inOrderTraversal(node.right, treeArray);
    }
  }
}
// Time Complexity: O(2nlogn) Space: O(p + q), O(r) - the biggest Tree
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const pArray: number[] = [];
  const qArray: number[] = [];

  p?.inOrderTraversal(p, pArray);
  console.log(pArray);

  q?.inOrderTraversal(q, qArray);
  console.log(qArray);

  if (pArray.length !== qArray.length) {
    return false;
  }
  for (let i = 0; i < pArray.length; i++) {
    if (pArray[i] !== qArray[i]) {
      return false;
    }
  }
  return true;
}

// Recursive leetcode solution
// O(n) time - number of nodes in the tree - visits each node exactly once.
// Space: O(n) worst - unbalanced tree recursion stack
// Best: O(log(n)) best - balanced tree
// check if p and q nodes are not None, and their values are equal, if OK, do the same
// for the child nodes
function recursiveIsSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // p and q are both null
  console.log('p: ', p?.value);
 // console.log('q: ', q);
  if (p === null && q === null) return true;
  // if one is null
  if (q === null || p === null) return false;
  if (p.value !== q.value) return false;
  // recursive
  return recursiveIsSameTree(p.right, q.right) && recursiveIsSameTree(p.left, q.left);
}


const p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(3);
p.right.left = new TreeNode(7);
p.right.right = new TreeNode(4);
p.right.right.left = new TreeNode(6);
p.left.left = new TreeNode(5);


const q = new TreeNode(1);
q.left = new TreeNode(2);
q.right = new TreeNode(3);
q.right.left = new TreeNode(7);
q.right.right = new TreeNode(4);
p.right.right.left = new TreeNode(6);
p.left.left = new TreeNode(5);
//console.log(isSameTree(p,q));
console.log('Recursive: ', recursiveIsSameTree(p,q));
