/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    // let LCA = null;
    // function traversal(curr) {
    //     let count = 0;
    //     if (!curr) return 0;

    //     let leftAns = traversal(curr.left);
    //     let rightAns = traversal(curr.right);

    //     if (curr.val === p.val || curr.val === q.val) {
    //         ++count;
    //     }
    //     count = count + leftAns + rightAns;

    //     if (count === 2 && !LCA) {
    //         LCA = curr;
    //     }
    //     return count;
    // }
    // traversal(root);

    // return LCA;
    //Approach: Recursive DFS Bottom Up Approach

    // Time Complexity: O(N)
    // → Every node is visited once.

    // Space Complexity: O(H)
    // → H = Height of the tree



    // Day 2 ======= Revision ========
    let LCA = null;

    function traverse(curr) {
        let count = 0;

        if (!curr) return 0
        let left = traverse(curr.left);
        let right = traverse(curr.right);

        if (p.val === curr.val || q.val === curr.val) {
            count++;
        }

        count = count + left + right;

        if (count === 2 && !LCA) {
            LCA = curr;
        }

        return count
    }
    traverse(root);

    return LCA;

};