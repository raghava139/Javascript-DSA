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
 * @return {number[]}
 */
var rightSideView = function (root) {
    // // iterative solution
    // if(!root) return [];
    // let q = [root];
    // let ans = [];
    // while (q.length) {
    //     let size = q.length;
    //     for (let i = 0; i < size; i++) {
    //         let curr = q.shift();

    //         i === 0 && ans.push(curr.val)

    //         // we have to push in reverse
    //         curr.right && q.push(curr.right);
    //         curr.left && q.push(curr.left);
    //     }
    // }
    // return ans;
    // BFS:
    // Time = O(N)
    // Space = O(N) → Queue + Output

    // recursive solution
    // if (!root) return [];
    // let ans = [];
    // function traverse(root, level) {

    //     if (level === ans.length) {
    //         ans.push(root.val)
    //     }
    //     root.right && traverse(root.right, level + 1);
    //     root.left && traverse(root.left, level + 1);
    // }
    // traverse(root, 0)
    // return ans;
    //     DFS:
    // Time  = O(N)
    // Space = O(H) → Recursion Stack + Output

    // Day 2 ==== revision === Iterative approach
    // if (!root) return [];
    // let q = [root];
    // let ans = [];

    // while (q.length) {
    //     let LevelSize = q.length;

    //     for (let i = 0; i < LevelSize; i++) {
    //         let curr = q.shift();
    //         i == 0 && ans.push(curr.val)
    //         curr.right && q.push(curr.right)
    //         curr.left && q.push(curr.left)
    //     }
    // }
    // return ans;

    // Day 2 ==== revision === recursion approach
    if (!root) return [];

    let ans = [];
    function traverse(curr, level) {

        if (ans.length === level) {
            ans.push(curr.val);
        }
        curr.right && traverse(curr.right, level + 1)
        curr.left && traverse(curr.left, level + 1)
    }
    traverse(root, 0);
    return ans;
};