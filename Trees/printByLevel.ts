/** printByLevel.ts
 * Iterate through a BST, add each level as an array of elements and output that array.
 * Example:
 *          1
 *       2    3
 *     4  5  6
 * 
 * Output: [[1], [2, 3], [4,5,6]]
 * 
 * Solution:
 * We implement a BFS which uses a queue. 
 * Keep a count of the next level's items. which will be the queue length
 * push the root into queue. 
 * while the queue has elements, use it's length as the size of the level output
 * iterate for a count of levelSize. push the value to the current level array
 * shift each node from the queue and adding its child to the queue.
 * push each child node to the queue. 
 */
class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(value) {
        this.value = value;
    }
}

function printByLevel(node: TreeNode) {
    const allLevels: Array<number>[] = [];
    const queue: TreeNode[] = [node];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel: number[] = [];

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            currentLevel.push(currentNode.value);
            if (currentNode.left !== null) queue.push(currentNode.left);
            if (currentNode.right !== null) queue.push(currentNode.right);
        }
        allLevels.push(currentLevel);
    }
    return allLevels;
}

const root = new TreeNode(1);

printByLevel(root);

