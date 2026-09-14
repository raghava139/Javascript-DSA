/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {

    // if (!p && !q) return true;
    // if (!p || !q) return false;
    // if (p.val !== q.val) return false;
    // return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);


    // Day 2 ===== Revision =====
    // if (!p && !q) return true;
    // if (!p || !q) return false;
    // if (p.val !== q.val) return false;
    // return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);


    // Day 5 ==== revision =====
    // if (!p && !q) return true;
    // if (!p || !q) return false;
    // if (p.val !== q.val) return false;

    // let leftTree = isSameTree(p.left, q.left);
    // let rightTree = isSameTree(p.right, q.right);

    // return leftTree && rightTree;

    // Day 10 ====revision======
    // if i reached to leaf then both trees are same
    if (!p && !q) return true;

    // if only one leaf node is null that means both tree's are not same;
    if (!p || !q) return false;

    //if both node have not same value then i value is not corret;
    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
// Time Complexity = O(N)  each node is visited once.
// Space Complexity = O(H) recursion stack can grow up to the height of the tree.