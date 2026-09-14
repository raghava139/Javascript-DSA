/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {

    // //Bottom Up Approach
    // let MaxDiameter = 0;
    // function findingDepth(root) {
    //     if (!root) return 0;

    //     let leftTree = findingDepth(root.left);
    //     let rightTree = findingDepth(root.right);

    //     let currentDiameter = leftTree + rightTree;
    //     MaxDiameter = Math.max(MaxDiameter, currentDiameter);
    //     return 1 + Math.max(leftTree, rightTree);
    // }
    // findingDepth(root);

    // return MaxDiameter;

    // let maxDiameter = 0;

    // function traversal(root) {
    //     if (!root) return 0;

    //     let left = traversal(root.left);
    //     let right = traversal(root.right);
    //     let currentDiameter = left + right;

    //     maxDiameter = Math.max(maxDiameter, currentDiameter);

    //     return 1 + Math.max(left, right);
    // }

    // traversal(root);
    // return maxDiameter;

    let maxDiameter = 0;

    function traverse(root) {

        if (!root) return 0;
        let left = traverse(root.left);
        let right = traverse(root.right);

        let currentDiameter = left + right;
        maxDiameter = Math.max(currentDiameter, maxDiameter);

        return 1 + Math.max(left, right);

    }
    traverse(root, 0)

    return maxDiameter;
};