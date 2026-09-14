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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    // if (!root) return false;

    //     // Top Down Approach
    // let pathSumTarget = false;
    // function traversal(curr, sum) {
    //     //if it reaches to leaf node then we need to check the targetsum is matches to our sum...
    //     if (!curr.left && !curr.right) {
    //         console.log('outside', sum)
    //         if (sum === targetSum) {
    //             console.log('inside', sum)
    //             pathSumTarget = true;
    //         }
    //     }
    //     curr.left && traversal(curr.left, sum + curr.left.val);
    //     curr.right && traversal(curr.right, sum + curr.right.val);
    // }
    // traversal(root, root.val)
    // return pathSumTarget;

    //Bottom Up Approach
    // if(!root.left && !root.right){
    //     return root.val === targetSum
    // }
    // let leftHasPath = hasPathSum(root.left,targetSum - root.val);
    // let rightHasPath = hasPathSum(root.right,targetSum - root.val);

    // return leftHasPath || rightHasPath;

    // For Both Approaches
    // TC: O(N);
    // SC: O(H);


    //=====day 2===revision====top down approach
    // let pathSum = false;
    // function traverse(curr, sum) {

    //     // if my both left and right child is not there.it means i reached the leaf node
    //     // now i want to compare both;
    //     if (!curr.left && !curr.right) {
    //         if (sum === targetSum) {
    //             pathSum = true;
    //         }
    //     }
    //     curr.left && traverse(curr.left, sum + curr.left.val)
    //     curr.right && traverse(curr.right, sum + curr.right.val)
    // }
    // traverse(root, root.val)

    // return pathSum;

    //=====day 2===revision====bottom up approach
    // if (!root) return false;
    // if (!root.left && !root.right) {
    //     return root.val === targetSum;
    // }

    // let leftPath = hasPathSum(root.left, targetSum - root.val);
    // let rightPath = hasPathSum(root.right, targetSum - root.val);
    // console.log(leftPath)
    // console.log(rightPath)
    // return leftPath || rightPath;

    // Day 5 Revision====Top Down Approach
    // if (!root) return false;

    // let depthPathSum = false;
    // function traversal(root, sum) {

    //     //if both children nodes are not there.it means i reached to leaf node.
    //     if (!root.left && !root.right) {
    //         if (sum === targetSum) {
    //             depthPathSum = true;
    //         }
    //     }

    //     root.left && traversal(root.left, sum + root.left.val);
    //     root.right && traversal(root.right, sum + root.right.val);
    // }
    // traversal(root, root.val);

    // return depthPathSum;

    // Day 5 Revision====Bottom up Approach
    // if(!root) return false;
    // if (!root.left && !root.right) {
    //     return targetSum === root.val;
    // }
    // let leftPath = hasPathSum(root.left, targetSum - root.val);
    // let rightPath = hasPathSum(root.right, targetSum - root.val);

    // return leftPath || rightPath;

    // Time is O(N);
    // space is O(H);

    // Day 10 =====revision=====TOP Down Approach;
    // if(!root) return 0;
    // let pathSumBool = false;
    // function pathSumCalc(root, sum) {
    //     if (!root.left && !root.right) {
    //         if (sum === targetSum) {
    //             pathSumBool = true;
    //         }
    //         return;
    //     }
    //     root.left && pathSumCalc(root.left, sum + root.left.val);
    //     root.right && pathSumCalc(root.right, sum + root.right.val)
    // }
    // pathSumCalc(root, root.val);
    // return pathSumBool;


    // Day 10 =====revision======= Bottom Up Approach;
    // targetSum // root
    if (!root) return 0;
    if (!root.left && !root.right) {
        return targetSum === root.val
    }
    let leftTarget = hasPathSum(root.left, targetSum - root.val);
    let rightTarget = hasPathSum(root.right, targetSum - root.val);

    return leftTarget || rightTarget;
    
    // Time is O(N);
    // space is O(H);
}