/**
 * Binary Tree Traversals Recursively
 */
class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // inOrderTraversal - visits the left branch, then the current node, then the right branch
  // On a BST, this visits the nodes in ascending order.
  inOrderTraversal(node: TreeNode | null = null) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      this.visit(node);
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
}

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.left.right = new TreeNode(12);
root.right = new TreeNode(20);
root.right.left = new TreeNode(3);
root.right.left.left = new TreeNode(9);
root.right.left.right = new TreeNode(18);
root.right.right = new TreeNode(7);

console.log('InOrderTraversal: ');
root.inOrderTraversal(root);
console.log('PreOrderTraversal: ');
root.preOrderTraversal(root);
console.log('PostOrderTraversal: ');
root.postOrderTraversal(root);
