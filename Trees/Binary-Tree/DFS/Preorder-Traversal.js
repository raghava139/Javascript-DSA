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
var preorderTraversal = function (root) {
    // let ans  = [];
    // function traversal(current){
    //     // root -> left -> right;
    //     if(!current) return;
    //     ans.push(current.val); //root
    //     traversal(current.left); //left
    //     traversal(current.right);//right
    // }
    // traversal(root)

    // return ans

    //iterative Approach;
    // if (!root) return []
    // let ans = [];
    // let stack = [];
    // stack = [root]
    // while (stack.length) {
    //     let curr = stack.pop();
    //     ans.push(curr.val);
    //     curr.right && stack.push(curr.right); //for saving purpose;
    //     curr.left && stack.push(curr.left);
    // }
    // return ans;

    ///REVISIONS=============
    // // Day 2 revision
    // let ans = [];

    // function traversal(curr) {

    //     // root -> left -> right
    //     if (!curr) return;

    //     ans.push(curr.val);
    //     traversal(curr.left);
    //     traversal(curr.right);
    // }
    // traversal(root);

    // return ans;

    // Day 2=====revision=====
    //iterative approach
    // if (!root) return [];
    // let ans = [];
    // let stack = [root];

    // while (stack.length) {
    //     let curr = stack.pop();
    //     ans.push(curr.val);
    //     curr.right && stack.push(curr.right);
    //     curr.left && stack.push(curr.left);
    // }
    // return ans;
    // Day 5 ====revision=====
    // ====recursion approach========
    // let ans = [];
    // // //Root => left => right
    // function traversal(curr) {
    //     if (!curr) return;
    //     ans.push(curr.val);
    //     traversal(curr.left);
    //     traversal(curr.right);
    // }
    // traversal(root)
    // return ans;

    // TC:O(N) (visited every node)
    // SC:O(N+H) =>O(N)
    //  N => every node(output array) + H => Height of the tree from root to leaf node (max possible call stack stores)
    // since H <= N

    // Day 5 =====revision======Iterative approach=======
    // if (!root) return [];
    // let stack = [root];
    // let ans = [];

    // while (stack.length) {
    //     let curr = stack.pop();
    //     ans.push(curr.val);
    //     curr.right && stack.push(curr.right);
    //     curr.left && stack.push(curr.left);
    // }
    // return ans;

    // Time:
    // O(N) => N is every node visited;

    // Space:
    // O(N+H) => N is output Array; H=>height of the tree (max Possible Stack Size)
    // O(N) Since H <= N

    // Day 10 revision=======
    // root -> left -> right
    // let ans = [];
    // function traversal(curr) {
    //     if (!curr) return;
    //     ans.push(curr.val);
    //     curr.left && traversal(curr.left);
    //     curr.right && traversal(curr.right);
    // }
    // traversal(root);

    // return ans;
    
    // time complexity:
    // TC: O(N) every node visited
    // SC: O(N) => O(N+H) => 
    // N => output array 
    // H => Height of the tree (max possible call stack size)
    // H <= N forExample 4<=9 9+4 = 13 O(13)

    // Day 10 ======revision=======iteration approach
    if(!root) return [];
    let stack = [root];
    let ans = [];
    while(stack.length){
        let curr = stack.pop();
        ans.push(curr.val);
        curr.right && stack.push(curr.right);
        curr.left && stack.push(curr.left);
    }
    return ans;
};