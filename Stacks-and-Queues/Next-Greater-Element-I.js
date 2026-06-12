/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    // let stack = [];
    // let ngeMap = {};
    // let n = nums2.length;

    // stack.push(nums2[nums2.length - 1]);
    // ngeMap[nums2[nums2.length - 1]] = -1;

    // for (let i = n - 2; i >= 0; i--) {
    //     if (nums2[i] < stack[stack.length - 1]) {
    //         ngeMap[nums2[i]] = stack[stack.length - 1];
    //     } else {
    //         while (stack.length) {
    //             if (stack[stack.length - 1] < nums2[i]) {
    //                 stack.pop();
    //             } else {
    //                 ngeMap[nums2[i]] = stack[stack.length - 1];
    //                 break;
    //             }
    //         }
    //         if (stack.length === 0) {
    //             ngeMap[nums2[i]] = -1
    //         }
    //     }
    //     stack.push(nums2[i])
    // }
    // let output = []
    // for(let i=0;i<nums1.length;i++){
    //     output.push(ngeMap[nums1[i]])
    // }
    // return output;

    // TC: O(n)
    // SC: O(n);

    // day 2 revision =====
    let map = {};
    let n = nums2.length
    let stack = [];

    stack.push(nums2[n - 1]);
    map[nums2[n - 1]] = -1;

    for (let i = n - 2; i >= 0; i--) {
        while (stack.length) {
            if (nums2[i] > stack[stack.length - 1]) {
                stack.pop();
            } else {
                map[nums2[i]] = stack[stack.length - 1];
                break;
            }
        }
        if (stack.length === 0) {
            map[nums2[i]] = -1;
        }
        stack.push(nums2[i]);
    }
    let output = [];
    for (let i = 0; i < nums1.length; i++) {
        output.push(map[nums1[i]]);
    }
    return output;

    // TC: O(n)
    // SC: O(n)
};