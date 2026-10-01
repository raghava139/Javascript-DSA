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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {

    //Bottom Up Approach
    // if(!root) return new TreeNode(val)

    // if (root.val < val) {
    //     root.right = insertIntoBST(root.right, val)
    // } else {
    //     root.left = insertIntoBST(root.left, val)
    // }

    // return root;

    //Top Down Approach;
    // if(!root) return new TreeNode(val);
    // let curr = root;

    // while (true) {

    //     if (curr.val < val) {
    //         if (!curr.right) {
    //             curr.right = new TreeNode(val);
    //             break;
    //         }
    //         curr = curr.right
    //     } else {
    //         if (!curr.left) {
    //             curr.left = new TreeNode(val);
    //             break;
    //         }
    //         curr = curr.left;
    //     }
    // }
    // return root;

    // Day 2 Revision ==== Bottom up Approach ====
    //  function traverse(curr) {
    //     if (!curr) return new TreeNode(val);

    //     if (curr.val < val) {
    //         curr.right = traverse(curr.right)
    //     } else {
    //         curr.left = traverse(curr.left)
    //     }

    //     return curr;
    // }
    // return traverse(root);

    // Day 2 ====revision========
    // if (!root) return new TreeNode(val);

    // if (root.val < val) {
    //     root.right = insertIntoBST(root.right, val)
    // } else if (root.val > val) {
    //     root.left = insertIntoBST(root.left, val);
    // }

    // return root;

    // Day 10 revision=============
    if (!root) return new TreeNode(val);
    if (root.val < val) {
        root.right = insertIntoBST(root.right, val)
    } else if (root.val > val) {
        root.left = insertIntoBST(root.left, val)
    }

    return root;
};