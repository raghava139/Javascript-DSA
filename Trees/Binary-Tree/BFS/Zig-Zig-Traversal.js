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
var zigzagLevelOrder = function (root) {

    // Iterative Approach;
    // if (!root) return [];

    // let q = [root];
    // let ans = [];
    // let currentLevel = 0;

    // while (q.length) {
    //     let levelArr = [];
    //     let levelSize = q.length;

    //     for (let i = 0; i < levelSize; i++) {
    //         let curr = q.shift();

    //         if (currentLevel % 2 === 0) {
    //             levelArr.push(curr.val);
    //         } else {
    //             levelArr.unshift(curr.val);
    //         }

    //         curr.left && q.push(curr.left);
    //         curr.right && q.push(curr.right);
    //     }
    //     ans.push(levelArr);
    //    currentLevel = currentLevel + 1;
    // }
    // return ans;

    // Recursion Approach;
    // if (!root) return [];
    // let ans = [];
    // function traversalZigZag(root, level) {

    //     if (!ans[level]) ans[level] = [];
    //     if (level % 2 === 0) {
    //         ans[level].push(root.val);
    //     } else {
    //         ans[level].unshift(root.val);
    //     }

    //     root.left && traversalZigZag(root.left, level + 1);
    //     root.right && traversalZigZag(root.right, level + 1);
    // }
    // traversalZigZag(root, 0);
    // return ans;
    // Day 2 === revision ===== Iterative Approach
    // if(!root) return [];
    // let q = [root];
    // let ans = [];
    // let level = 0;

    // while (q.length) {
    //     let levelSize = q.length;
    //     let levelArr = [];

    //     for (let i = 0; i < levelSize; i++) {
    //         let curr = q.shift();

    //         //even number normal push
    //         if (level % 2 === 0) {
    //             levelArr.push(curr.val);
    //         } else {
    //             //odd Number push the values into reverse
    //             levelArr.unshift(curr.val);
    //         }
    //         curr.left && q.push(curr.left);
    //         curr.right && q.push(curr.right);
    //     }
    //     level++;
    //     ans.push(levelArr);
    // }
    // return ans;

    // Day 2 === revision === recursion approach
    // let ans = [];
    // function traverse(root, level) {
    //     if (!root) return;

    //     if (!ans[level]) ans[level] = [];

    //     //Odd Number Normal Push
    //     if (level % 2 === 0) {
    //         ans[level].push(root.val);
    //     } else {
    //         //Even Number Push to Reverse;
    //         ans[level].unshift(root.val);
    //     }

    //     traverse(root.left, level + 1)
    //     traverse(root.right, level + 1)
    // }
    // traverse(root, 0);
    // return ans;

    // Day 5 ==== revision=====iterative approach=====
    // if (!root) return [];
    // let q = [root];
    // let ans = [];
    // let level = 0;

    // while (q.length) {
    //     let levelSize = q.length;
    //     let levelArr = [];

    //     for (let i = 0; i < levelSize; i++) {
    //         let curr = q.shift();

    //         // if it is in odd level
    //         if (level % 2 === 0) {
    //             levelArr.push(curr.val)
    //         } else {
    //             levelArr.unshift(curr.val)
    //         }
    //         curr.left && q.push(curr.left);
    //         curr.right && q.push(curr.right);
    //     }
    //     ans.push(levelArr);
    //     level++;
    // }
    // return ans;

    // Day 5 ==== revision=====recursion approach=====
    if (!root) return [];
    let ans = []
    function traverseZigZag(curr, level) {
        if (!ans[level]) ans[level] = [];

        if (level % 2 === 0) {
            ans[level].push(curr.val);
        } else {
            ans[level].unshift(curr.val);
        }
        curr.left && traverseZigZag(curr.left, level + 1)
        curr.right && traverseZigZag(curr.right, level + 1)
    }
    traverseZigZag(root, 0)
    return ans;
};