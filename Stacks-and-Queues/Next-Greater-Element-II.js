/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {

    // first approach; with doubled array;
    // let stack = [];
    // let arr = [...nums, ...nums];
    // let n = arr.length;
    // let ans = Array(n).fill(-1);

    // stack.push(arr[n - 1]);
    // ans[n - 1] = -1; //optional

    // for (let i = n - 2; i >= 0; i--) {
    //     while (stack.length) {
    //         let top = stack[stack.length - 1];
    //         if (arr[i] < top) {
    //             ans[i] = top;
    //             break;
    //         } else {
    //             stack.pop()
    //         }
    //     }
    //     if (stack.length === 0) { //optional
    //         ans[i] = -1
    //     }
    //     stack.push(arr[i]);
    // }
    // return ans.slice(0, n / 2);
    //    Time Complexity: O(n)
    //     Reason:
    //     Each element is pushed into the monotonic stack once
    //     and popped at most once.

    //    Space Complexity: O(n)
    //     Reason:
    //     Extra stack + answer array + doubled array.

    // 2nd approach trick of i % n only in loop because wee need length;
    // let stack = [];
    // let n = arr.length;
    // let ans = Array(n).fill(-1);

    // stack.push(arr[arr.length - 1]);
    // ans[n - 1] = -1; //optional

    // for (let i = 2 * n - 1; i >= 0; i--) {
    //     while (stack.length) {
    //         let top = stack[stack.length - 1];
    //         if (arr[i % n] < top) {
    //             ans[i % n] = top;
    //             break;
    //         } else {
    //             stack.pop()
    //         }
    //     }
    //     if (stack.length === 0) { //optional
    //         ans[i % n] = -1
    //     }
    //     stack.push(arr[i % n]);
    // }

    // return ans;


    // ==> day 2 revision <===
    // Doubled the array Approach
    // let stack = [];

    // let arr = [...nums, ...nums];
    // let n = arr.length;

    // let ans = Array(n).fill(-1);

    // stack.push(stack[stack.length - 1]);
    // ans[n - 1] = -1 //optional

    // for (let i = n - 2; i >= 0; i--) {

    //     while (stack.length) {
    //         let top = stack[stack.length - 1];
    //         if (arr[i] < top) {
    //             ans[i] = top;
    //             break;
    //         }
    //         else {
    //             stack.pop();
    //         }
    //     }
    //     if (stack.length == 0) {
    //         ans[i] = -1
    //     }
    //     stack.push(arr[i]);
    // }
    // return ans.slice(0,n/2);
    //modulus approach
    let stack = [];
    let arr = nums;
    let n = arr.length;

    let ans = Array(n).fill(-1);

    stack.push(stack[stack.length - 1]);
    ans[n - 1] = -1

    for (let i = (2 * n) - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (arr[i % n] < top) {
                ans[i % n] = top;
                break;
            }
            else {
                stack.pop();
            }
        }

        if (stack.length === 0) {
            ans[i % n] = -1;
        }
        stack.push(arr[i % n]);
    }
    return ans;
};