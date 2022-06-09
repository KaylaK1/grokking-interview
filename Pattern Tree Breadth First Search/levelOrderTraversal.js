/**
 * Prints out each level of the tree from left to right
 */
import { Queue } from "./Queue";

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function traverse(root) {
  const result = [];
  if (root === null) {
    return result;
  }

  const queue = new Queue;
  // Start by pushing the root to the queue
  queue.push(root);
  // Check the branches of each node. If they are not null.
  // They get added to the queue for processing. LevelSize tells us
  // how many nodes exist on the current tree value. We dequeue each node and push
  // its value to the output array (result)
  while (queue.length > 0) {
    const levelSize = queue.length;
    currentLevel = [];
    // iterate through the current level, push its value to the output array and
    // its children to the queue from left to right to be processed.
    for (let i = 0; i < levelSize; i++){
      currentNode = queue.shift();
      // add the node to the current level
      currentLevel.push(currentNode.val);
      // insert the children of the node into the queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push(currentLevel);
  }

  return result;
}
