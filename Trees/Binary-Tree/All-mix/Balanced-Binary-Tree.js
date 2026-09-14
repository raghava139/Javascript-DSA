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
 * @return {boolean}
 */
var isBalanced = function (root) {
    // let ans = true;
    // function calculateBinaryTree(root) {
    //     if (!root) {
    //         return 0;
    //     }

    //     let leftTree = calculateBinaryTree(root.left)
    //     let rightTree = calculateBinaryTree(root.right)

    //     if (Math.abs(leftTree - rightTree) > 1) {
    //         ans = false;
    //     }
    //     return 1 + Math.max(leftTree, rightTree)
    // }
    // calculateBinaryTree(root)
    // return ans;

    // TIME is : O(N)
    // SPACE is : O(H) recursion stack + O(N) output = O(N)

    // Day 2 ====revision=============
    // let ans = true;
    // function BalancedTraversal(root, depth) {
    //     if (!root) {
    //         return 0;
    //     }
    //     let left = BalancedTraversal(root.left, depth + 1);
    //     let right = BalancedTraversal(root.right, depth + 1);

    //     if (Math.abs(left - right) > 1) {
    //         ans = false;
    //     }
    //     return 1 + Math.max(left, right);
    // }
    // BalancedTraversal(root, 1);
    // return ans;

    // TIME is : O(N)
    // SPACE is : O(H) recursion stack + O(N) output = O(N)

    // =============Day 5 Revision==================
    // let isBalancedBool = true;
    // function DepthBalance(root) {

    //     //if there is no children that means i reached to leaf node;
    //     if (!root) {
    //         return 0;
    //     }

    //     let left = DepthBalance(root.left);
    //     let right = DepthBalance(root.right);

    //     if (Math.abs(left - right) > 1) {
    //         isBalancedBool = false;
    //     }

    //     return 1 + Math.max(left, right)
    // }
    // DepthBalance(root)
    // return isBalancedBool;

    // Day 10 =====revision=========

    let isBalancedTree = true;

    function BalancedTraverse(root, depth) {

        if (!root) {
            return 0;
        }

        let left = BalancedTraverse(root.left, depth + 1);
        let right = BalancedTraverse(root.right, depth + 1);

        if (Math.abs(right - left) > 1) {
            isBalancedTree = false;
        }

        return 1 + Math.max(left, right)
    }
    BalancedTraverse(root, 1);

    return isBalancedTree;
    // TIME is : O(N)
    // SPACE is : O(H) recursion stack + O(N) output = O(N)
};