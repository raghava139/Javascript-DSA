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
var postorderTraversal = function (root) {

    // // left > right > root;
    // let ans = [];

    // function BinaryPostOrderTraversal(curr) {

    //     if (!curr) return;
    //     BinaryPostOrderTraversal(curr.left); // left
    //     BinaryPostOrderTraversal(curr.right); // right
    //     ans.push(curr.val) // root;
    // }
    // BinaryPostOrderTraversal(root);

    // return ans;

    //iterative approach===== using two stacks
    // if (!root) return [];
    // let s1 = [root];
    // let s2 = [];

    // while (s1.length) {
    //     let curr = s1.pop();
    //     s2.push(curr.val);
    //     curr.left && s1.push(curr.left);
    //     curr.right && s1.push(curr.right);
    // }
    // let result = [];
    // while (s2.length) {
    //     result.push(s2.pop())
    // }
    // return result;

    // time & space complexitiess
    // (Each node is pushed once into s1, pushed once into s2, popped once from s2, and visited once.)

    // SC = O(N)
    // O(H) = Stack s1
    // (Maximum possible stack size = Height of Tree)

    // O(N) = Stack s2
    // (Stores every node)

    // O(N) = Result Array
    // (Stores final traversal)

    // Total = O(H + N + N)
    //       = O(2N + H)
    //       = O(N) 


    // iterative approach using 1stack
    // let stack = [];
    // let ans = [];
    // let curr = root;
    // let lastVisited = null;

    // while(curr || stack.length){

    //     //move the curr at leftmost until becomes null and also push into stack;
    //     while(curr){
    //         stack.push(curr)
    //         curr = curr.left;
    //     }

    //     //find the top element in stack
    //     let peekNode = stack[stack.length-1];

    //     // if the parent has right child then curr element you can move curr to right node
    //     if(peekNode.right &&  peekNode.right !== lastVisited){
    //         curr = peekNode.right;
    //     }else{
    //         ans.push(peekNode.val);
    //         lastVisited = stack.pop();
    //     }
    // }
    // return ans;
    // TC = O(N)

    // N = Number of Nodes
    // (Every node is pushed once, popped once, and visited once)

    // SC = O(N + H)

    // O(N) = Output Array

    // O(H) = Stack
    // (Maximum possible stack size is bounded by the Height of the Tree
    // = Longest Root → Deepest Leaf Path)

    // Since H ≤ N,
    // O(N + H) ⇒ O(N)
    // ------------------------------------------------
    // Day 2 =======revision=======
    // let ans = []
    // //left -> right -> root;
    // function traversal(curr) {
    //     if (!curr) return;
    //     traversal(curr.left);
    //     traversal(curr.right);
    //     ans.push(curr.val);
    // }
    // traversal(root);
    // return ans;

    //------------
    // Day 2 revision====iterative approach using two stacks====
    // if (!root) return []

    // // initially we are storing the root;
    // let stack1 = [root]; // storing children notes;
    // let stack2 = []; //main root
    // while (stack1.length) {
    //     let curr = stack1.pop();
    //     stack2.push(curr);
    //     curr.left && stack1.push(curr.left);
    //     curr.right && stack1.push(curr.right);
    // }

    // //reverse the s2 and store it into the ans;
    // let ans = [];
    // while (stack2.length) {
    //     ans.push(stack2.pop().val);
    // }
    // return ans;

    // TC = O(N)
    // N = Number of Nodes (Every node is processed once)

    // SC = O(N)
    // O(N) = Stack1
    // O(N) = Stack2
    // O(N) = Output Array
    // Total = O(3N) = O(N)

    // Day 2 ===== revision ======= Iterative Approach using one Stack
    // let stack = [];
    // let ans = [];
    // let curr = root;
    // let lastVisitedNode = null

    // while (curr || stack.length) {
    //     while (curr) {
    //         stack.push(curr);
    //         curr = curr.left;
    //     }
    //     let peekNode = stack[stack.length - 1];
    //     if (peekNode.right && lastVisitedNode != peekNode.right) {
    //         curr = peekNode.right;
    //     } else {
    //         ans.push(peekNode.val);
    //         lastVisitedNode = stack.pop();
    //     }
    // }
    // return ans;
    // TC = O(N)
    //     N = Number of Nodes
    // Every node is:
    // → pushed once
    // → popped once
    // → visited once

    // SC = O(N + H) ⇒ O(N)

    // O(N) = Output Array
    // O(H) = Stack
    // H = Height of Tree
    //     (Longest Root → Leaf Path)
    //     (Maximum possible stack size)

    // Since H ≤ N:
    // O(N + H) ⇒ O(N)

    // Day 5 ===== revision =======recursion approach=====
    // let ans = [];
    // function traversal(curr) {
    //     if (!curr) return;
    //     traversal(curr.left);
    //     traversal(curr.right);
    //     ans.push(curr.val);
    // }
    // traversal(root)

    // return ans;

    // Time : O(N) where N = every visited Node;
    // Space : O(N+H) = O(N) where N = output array (every Node) + Height of the tree(H)[maximum callstack size]
    // H <= N

    // // Day 5 revision=======iterative=====approach
    // if (!root) return [];
    // let s1 = [root];
    // let s2 = []; // main ans
    // let ans = [];// reversed ans;

    // while (s1.length) {
    //     let curr = s1.pop();
    //     s2.push(curr.val);
    //     // childrens
    //     curr.left && s1.push(curr.left);
    //     curr.right && s1.push(curr.right);
    // }

    // //reverse
    // while (s2.length) {
    //     ans.push(s2.pop())
    // }

    // return ans;

    // Day 10 ==== revision ==== recursion approach ====
    // let ans = [];
    // function traversal(curr) {
    //     if (!curr) return;
    //     traversal(curr.left);
    //     traversal(curr.right);
    //     ans.push(curr.val);
    // }
    // traversal(root)
    // return ans;

    //Day 5 ===== revision ===iterative==using 1 stack===
    // let curr = root;
    // let stack = [];
    // let lastVisitedNode = null;
    // let ans = [];

    // while (curr || stack.length) {

    //     // push left node if it is there
    //     while (curr) {
    //         stack.push(curr);
    //         curr = curr.left;
    //     }

    //     let peekNode = stack[stack.length - 1];
    //     // if the peekNode has right move right and also check if it is already visited or not visited
    //     if (peekNode.right && lastVisitedNode !== peekNode.right) {
    //         curr = peekNode.right;
    //     } 
    //     else {
    //         lastVisitedNode = stack.pop();
    //         ans.push(lastVisitedNode.val)
    //     }
    // }
    // return ans;


    // Day 10 ==== revision ==== using 2 stacks
    // if(!root) return [];

    // let s1 = [root];
    // let s2 = [];
    // let ans = [];

    // while (s1.length) {
    //     let curr = s1.pop();
    //     s2.push(curr.val);
    //     curr.left && s1.push(curr.left);
    //     curr.right && s1.push(curr.right);
    // }

    // while(s2.length){
    //     ans.push(s2.pop())
    // }

    // return ans;

    // TC = O(N)
    // N = Number of Nodes (Every node is processed once)

    // SC = O(N)
    // O(N) = Stack1
    // O(N) = Stack2
    // O(N) = Output Array
    // Total = O(3N) = O(N)

    //  Day 10 ==== revision ==== using 1 stack;
    let stack = [];
    let ans = [];
    let curr = root;
    let lastVisited = null;
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }

        let peekNode = stack[stack.length - 1];
        if (peekNode.right && lastVisited !== peekNode.right) {
            curr = peekNode.right;
        }
        else {
            lastVisited = stack.pop();
            ans.push(lastVisited.val);
        }
    }
    return ans;
    // TC = O(N)
    // N = Number of Nodes
    // Every node is:
    // → pushed once
    // → popped once
    // → visited once

    // SC = O(N + H) ⇒ O(N)
    // O(N) = Output Array
    // O(H) = Stack
    // H = Height of Tree
    //     (Longest Root → Leaf Path)
    //     (Maximum possible stack size)
};