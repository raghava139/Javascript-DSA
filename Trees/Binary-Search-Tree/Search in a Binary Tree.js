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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {

    // // top-down approach  
    // let temp = null;
    // function SearchTraverse(curr, val) {
    //     if (curr.val === val) {
    //         temp = curr;
    //     } else if (curr.val > val) {
    //         curr.left && SearchTraverse(curr.left, val)
    //     } else if (curr.val < val) {
    //         curr.right && SearchTraverse(curr.right, val)
    //     }
    // }
    // SearchTraverse(root, val)
    // return temp;

    // //Bottom - up Approach 
    // if (!root) return root;
    // if (root.val === val) return root;
    // return root.val > val ? searchBST(root.left, val) : searchBST(root.right, val);

    // Time complexity: O(h)
    // Space complexity: O(h)


    //Day 2 ====== Revision ======
    // Top Down approach 
    // let ans = null;
    // function searchTraverse(curr, val) {
    //     if (!curr) return;
    //     if (curr.val === val) {
    //         ans = curr;
    //     }
    //     if (curr.val < val) {
    //         searchTraverse(curr.right, val)
    //     } else {
    //         searchTraverse(curr.left, val)
    //     }
    // }
    // searchTraverse(root, val)
    // return ans;


    // Day 2 ==== revision ====
    // Bottom up Approach

    // if (!root) return root;

    // if (root.val === val) return root;

    // return root.val < val ? searchBST(root.right, val) : searchBST(root.left, val);


    // if (!root) return root;
    // if (root.val > val) {
    //     return searchBST(root.left, val)
    // } else if (root.val < val) {
    //     return searchBST(root.right, val)
    // }
    // return root
    // if(!root) return root;

    // // Day 10 Revision=====
    if(!root) return root;
    if (root.val < val) {
       return  searchBST(root.right,val)
    }
    else if (root.val > val) {
       return searchBST(root.left,val)
    }
    else {
        return root;
    }
};