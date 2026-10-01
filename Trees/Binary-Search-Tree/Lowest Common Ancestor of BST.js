/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {

    // if (p.val < root.val && q.val < root.val) {
    //     return lowestCommonAncestor(root.left, p, q)
    // }
    // else if (p.val > root.val && q.val > root.val) {
    //     return lowestCommonAncestor(root.right, p, q)
    // } else {
    //     return root;
    // }

    // Time is O(log n)
    // Space is O(H)


    // Day 2 revision========
    // if (root.val < p.val && root.val < q.val) {
    //     return lowestCommonAncestor(root.right,p,q)
    // } else if (root.val > p.val && root.val > q.val) {
    //     return lowestCommonAncestor(root.left,p,q)
    // } else {
    //     return root;
    // }


    // Day 5 =====revision====
    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q)
    }
    else if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q)
    } else {
        return root;
    }
};