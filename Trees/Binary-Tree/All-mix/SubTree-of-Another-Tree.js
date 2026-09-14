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
 * @param {TreeNode} subRoot
 * @return {boolean}[]
 */
var isSubtree = function (root, subRoot) {

    // let hasRoot = serialize(root);
    // let hasSubRoot = serialize(subRoot);

    // console.log(hasRoot);
    // console.log(hasSubRoot);
    // return hasRoot.includes(hasSubRoot);

    // Day 2 ===revision======
    let mainRoot = serialization(root);
    let subTreeRoot = serialization(subRoot);
    console.log(mainRoot)
    console.log(subRoot)

    return mainRoot.includes(subTreeRoot);
};

// let serialize = function (root) {

//     let hash = "";
//     function traverse(curr) {
//         if (!curr) {
//             hash = hash + "-#"
//             return;
//         }

//         hash = hash + "-" + curr.val;
//         traverse(curr.left);
//         traverse(curr.right);
//     }
//     traverse(root)

//     return hash;
// }

// Time: O(N + M)
// N = number of nodes in root
// M = number of nodes in subRoot

// Space: O(N + M)
// root serialization    → O(N)
// subRoot serialization → O(M)
// O(Hroot + HsubRoot)
// O(N + M)

// Day 2 ===revision======
let serialization = function (root) {
    let hash = "";

    function traversal(curr) {
        if (!curr) {
            hash = hash + "-#";
            return;
        }
        hash = hash + "-" + curr.val
        let left = traversal(curr.left);
        let right = traversal(curr.right);
    }
    traversal(root)

    return hash;
};