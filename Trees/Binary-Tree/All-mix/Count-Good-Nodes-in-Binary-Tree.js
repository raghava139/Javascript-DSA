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
var goodNodes = function (root) {

    let count = 0;

    function traverse(root, lastSeen) {
        if (!root) return;

        if (root.val >= lastSeen) {
            count++
        }
        lastSeen = Math.max(lastSeen, root.val);
        traverse(root.left, lastSeen);
        traverse(root.right, lastSeen);
    }

    traverse(root, -Infinity);

    return count;
};