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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    // if (!root) return root;
    // let temp = root.left;
    // root.left = root.right;
    // root.right = temp;

    // invertTree(root.left);
    // invertTree(root.right);

    // return root

    // Time is O(N);
    // Space is O(H);

    // using Iterative Solution using BFS QUEUES
    // if (!root) return root;
    // let q = [root];
    // while (q.length) {
    //     let curr = q.shift();

    //     let temp = curr.left;
    //     curr.left = curr.right;
    //     curr.right = temp;

    //     curr.left && q.push(curr.left);
    //     curr.right && q.push(curr.right);
    // }
    // return root;
    // Time Complexity = O(N), where N = Number of Nodes (Every node is visited exactly once).
    // Space Complexity = O(W), where W = Maximum Width of the Tree (Maximum number of nodes stored in the queue at any point).

    // Day 2 Revision ===== Recursion =====
    // if (!root) return root;
    // function SwapTraversal(curr) {

    //     if (!curr) return;

    //     let temp = curr.left;
    //     curr.left = curr.right;
    //     curr.right = temp;

    //     SwapTraversal(curr.left);
    //     SwapTraversal(curr.right);
    // }
    // SwapTraversal(root)
    // return root;
    // Time complexity: O(N)
    // Space complexity: O(H), where H is the height of the tree; worst case O(N).

    // Day 5 Revision ==== Iterative approach====
    // if(!root) return root;
    // let q = [root];

    // while (q.length) {
    //     let curr = q.shift();

    //     let temp = curr.left;
    //     curr.left = curr.right;
    //     curr.right = temp;

    //     curr.left && q.push(curr.left);
    //     curr.right && q.push(curr.right);
    // }
    // return root;

    // Day 5=====approach==recursive approach
    // if (!root) return root;
    // let temp = root.left;
    // root.left = root.right;
    // root.right = temp;

    // invertTree(root.left);
    // invertTree(root.right);
    // return root;

    // Day 5 ===== approach ===== iterative approach
    // if(!root) return root;
    // let q = [root];

    // while(q.length){
    //     let curr = q.shift();

    //     let temp = curr.left;
    //     curr.left = curr.right;
    //     curr.right = temp;

    //     curr.left && q.push(curr.left);
    //     curr.right && q.push(curr.right);
    // }
    // return root;

    // Time = O(N)
    // Auxiliary Space = O(W)

    //Day 10 Revision ==== Recursion Approach ======
    // function traversalInvert(root) {
    //     if (!root) return;

    //     let temp = root.left;
    //     root.left = root.right;
    //     root.right = temp;

    //     traversalInvert(root.left);
    //     traversalInvert(root.right);
    // }
    // traversalInvert(root);

    // return root;
    // Time complexity: O(N)
    // Space complexity: O(H), where H is the height of the tree; worst case O(N).

    let q = [root];
    function traversal(root) {

        if (!root) return root;
        while (q.length) {
            let curr = q.shift();

            let temp = curr.left;
            curr.left = curr.right;
            curr.right = temp;

            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
        }
    }
    traversal(root);
    return root;
};