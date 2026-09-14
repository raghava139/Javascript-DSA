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
var isSymmetric = function (root) {

    //Recursion === bottom up ===approach
    // function isMirror(left, right) {
    //     if (!left && !right) {
    //         return true;
    //     }
    //     if (!left || !right) {
    //         return false;
    //     }
    //     return left.val === right.val
    //         && isMirror(left.left, right.right)
    //         && isMirror(left.right, right.left);
    // }
    // return isMirror(root.left, root.right);

    // TC: O(N); //Every Node Visited;
    // SC: O(H); //Height of the Tree;

    // Iterartive approach using BFS (QUEUE)
    // let q = [root.left, root.right];
    // while (q.length) {
    //     let left = q.shift();
    //     let right = q.shift();

    //     if (!left && !right) {
    //         continue;
    //     }
    //     if (!left || !right) {
    //         return false;
    //     }
    //     if (left.val !== right.val) {
    //         return false;
    //     }

    //     q.push(left.left, right.right);
    //     q.push(left.right, right.left);
    // }
    // return true;

    // Day 2 recursion approach
    // function traverse(left, right) {

    //     if (!left && !right) return true;
    //     if (!left || !right) return false;
    //     if (left.val !== right.val) return false;

    //     return traverse(left.left, right.right)
    //         && traverse(left.right, right.left);
    // }
    // return traverse(root.left, root.right);

    // Day 5 Approach
    // function SymmetricTraversal(left, right) {
    //     if (!left && !right) {
    //         return true;
    //     }
    //     if (!left || !right) {
    //         return false;
    //     }
    //     if (left.val !== right.val) {
    //         return false;
    //     }

    //     return SymmetricTraversal(left.left, right.right) &&
    //         SymmetricTraversal(left.right, right.left)

    // }
    // return SymmetricTraversal(root.left, root.right);

    // Time is O(N);
    // Space is O(N+H); => O(N)

    // Day 10 ==== recursion ===== bottom up === approach
    function traversal(left, right) {
        if (!left && !right) return true;
        if (!left || !right) return false;
        if (left.val !== right.val) return false;

        let leftTree = traversal(left.left, right.right);
        let rightTree = traversal(left.right, right.left);

        return leftTree && rightTree;
    }
    return traversal(root.left, root.right);
    
    // Time is O(N);
    // Space is O(N+H); => O(N)

};