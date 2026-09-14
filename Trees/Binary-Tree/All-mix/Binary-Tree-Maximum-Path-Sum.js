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
var maxPathSum = function (root) {
    let maximumPathSum = -Infinity;

    function traverse(curr) {

        if (!curr) return 0;

        let left = Math.max(0, traverse(curr.left));
        let right = Math.max(0, traverse(curr.right));
        let currentMax = curr.val + left + right;
        maximumPathSum = Math.max(currentMax, maximumPathSum);

        return curr.val + Math.max(left, right);
    }
    traverse(root);

    return maximumPathSum;
};