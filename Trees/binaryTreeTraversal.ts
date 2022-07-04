/**
 * Binary Tree Traversals Recursively
 */
 // https://www.typescriptlang.org/docs/handbook/2/functions.html

type nodeCallback = (node: TreeNode) => any;

export class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // inOrderTraversal - visits the left branch, then the current node, then the right branch
  // On a BST, this visits the nodes in ascending order. Visits nodes from left to right
  inOrderTraversal(node: TreeNode | null = null, callback?: (node: TreeNode) => void) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      callback?.(node); // not sure if ? is good practice
      this.inOrderTraversal(node.right);
    }
  }

  // preOrderTraversal - visit the current node before it's child nodes
  // root is always visited first
  preOrderTraversal(node: TreeNode | null = null) {
    if (node !== null) {
      this.visit(node);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
  }

  // postOrderTraversal - Visits the current node after it's child nodes
  // the root is always the last node visited
  postOrderTraversal(node: TreeNode | null = null) {
    if (node !== null) {
      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
      this.visit(node);
    }
  }

  // Visit prints out the value
  visit(node: TreeNode) {
    console.log(node.value);
  }

  // Calls traversals on a node
  traversalTests(node: TreeNode) {
    console.log('InOrderTraversal: ');
    node.inOrderTraversal(node, this.visit);
    console.log('PreOrderTraversal: ');
    node.preOrderTraversal(node);
    console.log('PostOrderTraversal: ');
    node.postOrderTraversal(node);
  }
}

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.left.right = new TreeNode(12);
root.right = new TreeNode(20);
root.right.left = new TreeNode(3);
root.right.left.left = new TreeNode(9);
root.right.left.right = new TreeNode(18);
root.right.right = new TreeNode(7);

root.traversalTests(root);
