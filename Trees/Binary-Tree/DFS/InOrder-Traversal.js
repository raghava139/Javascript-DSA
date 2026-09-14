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
var inorderTraversal = function (root) {
    // let ans = [];

    // function BinaryInorder(curr) {

    //     // left -> root -> right;

    //     if (!curr) return;
    //     BinaryInorder(curr.left); //left 
    //     ans.push(curr.val); //root
    //     BinaryInorder(curr.right);//right
    // }
    // BinaryInorder(root)

    // return ans;

    // //Iterative Approach using Stack;
    // let stack = [];
    // let ans = [];
    // let curr = root;

    // while (curr || stack.length) {
    //     while (curr) {
    //         stack.push(curr);
    //         curr = curr.left;
    //     }
    //     curr = stack.pop();
    //     ans.push(curr.val);
    //     curr = curr.right;
    // }
    // return ans;


    // Day 2 ====revision=====
    // let ans = [];

    //left -> root -> right;

    // function traversal(curr) {

    //     if (!curr) return;

    //     traversal(curr.left);
    //     ans.push(curr.val);
    //     traversal(curr.right);
    // }
    // traversal(root);

    // return ans;

    // Day 2 revision=====
    // Iterative Approach using stack
    // let stack = [];
    // let ans = [];
    // let curr = root;
    // while (curr || stack.length) {
    //     while (curr) {
    //         stack.push(curr);
    //         curr = curr.left;
    //     }
    //     curr = stack.pop();
    //     ans.push(curr.val);
    //     curr = curr.right;
    // }
    // return ans;

    // time & space
    // time = O(n);
    // space = O(n);

    // Day 5====>revision=>Recursion
    // let ans = [];
    // function traversal(curr) {
    //     if (!curr) return;
    //     traversal(curr.left);
    //     ans.push(curr.val);
    //     traversal(curr.right);
    // }
    // traversal(root);

    // return ans;

    // Day 5 ===> revision ==> Iterative Approach
    // let curr = root;
    // let stack = [];
    // let ans = [];

    // while (curr || stack.length) {
    //     while (curr) {
    //         // saving the root node
    //         stack.push(curr);
    //         curr = curr.left;
    //     }
    //     curr = stack.pop();
    //     ans.push(curr.val);
    //     curr = curr.right;
    // }
    // return ans;

    //TC: O(N)
    // N = Number of Nodes
    // Every node is:
    // - pushed into stack once
    // - popped from stack once
    // - processed once

    // SC : O(N + H) => O(N)
    // N = Output Array
    // H = Maximum possible Stack Size
    //   = Height of the Tree
    // Since H <= N:
    // O(N + H) => O(N)

    // Day 10 revision=====Recursion Approach====
    // let ans = [];

    // function traversal(curr) {
    //     if (!curr) return;

    //     traversal(curr.left);
    //     ans.push(curr.val);
    //     traversal(curr.right);
    // }
    // traversal(root);

    // return ans;

    // Day 10 Revision === iteration == approach
    let stack = [];
    let ans = [];
    let curr = root;

    while (curr || stack.length) {

        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        ans.push(curr.val);
        curr = curr.right;
    }
    return ans;
};