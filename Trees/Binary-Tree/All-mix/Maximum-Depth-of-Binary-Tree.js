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
var maxDepth = function (root) {
    //top-down approach using recursion
    // if(!root) return 0; 
    // let maxDepth = 0;

    // function traversal(curr, depth) {
    //     maxDepth = Math.max(depth, maxDepth);
    //     curr.left && traversal(curr.left,depth+1);
    //     curr.right && traversal(curr.right,depth+1);
    // }
    // traversal(root, 1)
    // return maxDepth;

    //bottom up approach using recursion;
    // if(!root) return 0;
    // let leftMax = maxDepth(root.left);
    // let rightMax = maxDepth(root.right);
    // return 1+Math.max(leftMax,rightMax);

    // TC: O(N);
    // SC: O(H);
    // N => every Node Visited;
    // H => Height of the tree;

    // Day 2 =====revision=====Recursion;
    // top-down approach
    // if(!root) return 0;
    // let maxDepthCount = 0;
    // function traversal(curr, depth) {
    //     maxDepthCount = Math.max(maxDepthCount, depth);
    //     curr.left && traversal(curr.left, depth + 1);
    //     curr.right && traversal(curr.right, depth + 1);
    // }
    // traversal(root, 1);
    // return maxDepthCount;


    // Day 2 ====revision====
    // Bottom-to-top approach
    // if (!root) {
    //     return 0;
    // }
    // let leftMax = maxDepth(root.left);
    // let rightMax = maxDepth(root.right);
    // return 1 + Math.max(leftMax, rightMax);


    // Day 5 =====revision=====top-down=> approach
    // if (!root) return 0;
    // let maxDepth = 0;
    // function traversal(root, depth) {
    //     maxDepth = Math.max(depth, maxDepth);
    //     root.left && traversal(root.left, depth + 1);
    //     root.right && traversal(root.right, depth + 1);
    // }
    // traversal(root, 1)

    // return maxDepth;

    // Day 5 ===revision== bottom-up approach recursion
    // if(!root) return 0;
    // let leftDepth =  maxDepth(root.left);
    // let rightDepth = maxDepth(root.right);
    // return 1 + Math.max(leftDepth, rightDepth);

    // time is O(N)
    // space is O(H)

    //Day 10 ======= Revision =======
    //Top Down Approach 
    // if (!root) return 0;
    // let maxDepthTree = 0;
    // function traversal(root, depth) {
    //     maxDepthTree = Math.max(maxDepthTree, depth)
    //     root.left && traversal(root.left, depth + 1);
    //     root.right && traversal(root.right, depth + 1);
    // }
    // traversal(root, 1)
    // return maxDepthTree;

    // TC: O(N);
    // SC: O(N+H) = O(N);

    // Day 10 ====Bottom UP Approach=======
    if (!root) return 0;

    let leftMax = maxDepth(root.left);
    let rightMax = maxDepth(root.right);

    return 1 + Math.max(leftMax, rightMax);

    // time is O(N)
    // space is O(H)
};