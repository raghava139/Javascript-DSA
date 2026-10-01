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
 * @param {number} k
 * @return {number}
 */



var kthSmallest = function (root, k) {

    // let count = k;
    // let ans = null

    // function traverse(curr) {
    //     if (ans) return;
    //     curr.left && traverse(curr.left);
    //     count = count - 1;
    //     if (count === 0) {
    //         ans = curr.val
    //     }
    //     curr.right && traverse(curr.right);
    // };
    // traverse(root);
    // return ans

    // Time:  O(n)
    // Space: O(h)   // recursion stack

    // h = height of tree
    // Balanced → O(log n)
    // Skewed   → O(n)

    // Reason:
    // Inorder traversal uses recursion.
    // let ans = null;
    // let count = k;

    // function traverse(curr) {
    //     if (ans) return;
    //     curr.left && traverse(curr.left)
    //     count--;
    //     if (count === 0) {
    //         ans = curr.val
    //     }
    //     curr.right && traverse(curr.right);
    // }
    // traverse(root);

    // return ans;

    // let Count = k;
    // let ans = null;

    // function traverseTheSmallest(curr) {
    //     if (!curr || ans) return;
    //     traverseTheSmallest(curr.left);
    //     Count--;
    //     if (Count === 0) {
    //         ans = curr.val
    //     }
    //     traverseTheSmallest(curr.right);
    // }

    // traverseTheSmallest(root);

    // return ans;

    // ======= Day 10 revision =================
    let ans = null;
    let count = k;
    function traverseSmallestK(curr) {
        if (!curr) return;
        traverseSmallestK(curr.left);
        count--;
        if (count === 0) {
            ans = curr.val;
        }
        traverseSmallestK(curr.right);
    }
    traverseSmallestK(root)
    return ans;
}