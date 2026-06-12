/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {


    // let stack = [];
    // let n = temperatures.length;
    // let ans = Array(n).fill(0)

    // stack.push(n-1);
    // ans[n-1] = 0;
    // for (let i = n - 2; i >= 0; i--) {
    //     while (stack.length) {
    //     let top = stack[stack.length - 1]
    //         if (temperatures[i] < temperatures[top]) {
    //             ans[i] = top - i
    //             break;
    //         } else {
    //             stack.pop();
    //         }
    //     }
    //     if(stack.length === 0){
    //         ans[i] = 0
    //     }
    //    stack.push(i);
    // }

    // return ans;


    //Day 2 revision ====
    let stack = [];
    let arr = temperatures;
    let n = arr.length;
    let ans = Array(n).fill(0);

    stack.push(arr.length - 1);
    ans[n - 1] = 0;//optional

    for (let i = n - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (arr[i] < arr[top]) {
                ans[i] = top - i;
                break;
            }
            else {
                stack.pop();
            }
        }
        if (!stack.length) { //optional
            ans[i] = 0;
        }
        stack.push(i);
    }

    return ans;
    // TC:O(n)
    // for loop O(n) + while O(n) => O(2n) => O(n)
    // SC:O(n)
    // stack O(n) + ans O(n) => O(2n) => O(n)
};