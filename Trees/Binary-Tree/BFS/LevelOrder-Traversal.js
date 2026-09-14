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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    // if (!root) return [];

    // let q = [root];
    // let ans = [];

    // while (q.length) {
    //     let levelArr = [];
    //     let levelSize = q.length;

    //     for (let i = 0; i < levelSize; i++) {
    //         let curr = q.shift();
    //         curr.left && q.push(curr.left);
    //         curr.right && q.push(curr.right);
    //         levelArr.push(curr.val);
    //     }
    //     ans.push(levelArr);
    // }
    // return ans;
    // Time Complexity = O(N), where N = Number of Nodes (Every node is visited exactly once). 
    // Space Complexity = O(N), where O(N) = Queue + Output Array + Current Level Array.


    // // recursion approach=======
    // if (!root) return [];

    // let ans = [];

    // function traversal(curr, level) {
    //     if (!curr) return;

    //     if (!ans[level]) ans[level] = []
    //     ans[level].push(curr.val);
    //     traversal(curr.left, level + 1);
    //     traversal(curr.right, level + 1);
    // }
    // traversal(root, 0)
    // return ans;

    // Time & Space Complexity
    // TC = O(N)
    // SC = O(N + H) => O(N)
    // N = Output Array
    // H = Maximum Recursion Call Stack
    //     = Height of the Tree

    // Since H ≤ N
    // O(N + H) => O(N)

    // Day 2 revision ======iterative approach=======
    // if (!root) return [];
    // let q = [root];
    // let ans = [];

    // while (q.length) {
    //     let levelSize = q.length;
    //     let level = [];
    //     for (let i = 0; i < levelSize; i++) {
    //         let curr = q.shift();
    //         level.push(curr.val);
    //         // childrens
    //         curr.left && q.push(curr.left);
    //         curr.right && q.push(curr.right);
    //     }
    //     ans.push(level);
    // }
    // return ans;
    // TC: O(N)
    // N = Number of Nodes
    // Every node is visited once.

    // SC: O(N)
    // Queue = O(N) worst case
    // Output = O(N)
    // Level Array = O(N) worst case
    // Total = O(N)

    // Day 2 === revision ==== Recursion approach
    // let ans = [];
    // function LevelTraversal(curr, level) {
    //     if (!curr) return;
    //     if (!ans[level]) ans[level] = [];
    //     ans[level].push(curr.val);
    //     LevelTraversal(curr.left, level + 1);
    //     LevelTraversal(curr.right, level + 1);
    // }
    // LevelTraversal(root, 0)
    // return ans;

    // Day 5 ====revision====iterative approach====
    // if(!root) return [];
    // let q = [root];
    // let ans = [];
    // while (q.length) {
    //     let level = [];
    //     let levelSize = q.length;

    //     for (let i = 0; i < levelSize; i++) {
    //         curr = q.shift();
    //         level.push(curr.val);
    //         curr.left && q.push(curr.left);
    //         curr.right && q.push(curr.right);
    //     }
    //     ans.push(level)
    // }
    // return ans;


    // Day 5 ===revision====recursion-approach
    // let ans = [];
    // function traversal(curr, level) {
    //     if (!curr) return;
    //     if(!ans[level])  ans[level] = []
    //     ans[level].push(curr.val)
    //     traversal(curr.left, level + 1);
    //     traversal(curr.right, level + 1);
    // }
    // traversal(root, 0);
    // return ans;

    // Time : O(N);
    // Space : O(N+H) => O(N);


    // Day 10 Approach;
    // if (!root) return [];
    // let ans = [];
    // let q = [root];
    // while (q.length) {
    //     let level = [];
    //     let levelSize = q.length;
    //     for (let i = 0; i < levelSize; i++) {
    //         let curr = q.shift();
    //         level.push(curr.val);
    //         //curr node =>  childrens;
    //         curr.left && q.push(curr.left);
    //         curr.right && q.push(curr.right);
    //     }
    //     ans.push(level);
    // }
    // return ans;

    // Time : O(N); // every node visited
    // Space :O(W); width of the tree; + output array = > O(N+W) => O(N)


    // Day 10 Revision ===== Recursion ======
    // if (!root) return [];
    // let ans = [];
    // function LevelOrderTraversal(root, level) {
    //     if (!ans[level]) ans[level] = [];

    //     ans[level].push(root.val)
    //     root.left && LevelOrderTraversal(root.left, level + 1);
    //     root.right && LevelOrderTraversal(root.right, level + 1);
    // }
    // LevelOrderTraversal(root, 0)
    // return ans;
    // Time O(N) => every node we are visiting
    // Space O(H) => Height of the recursive callstack + O(N) output Array;=> O(N) 
};