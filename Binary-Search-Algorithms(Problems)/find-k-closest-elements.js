/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {

    // sliding window + Linear search approach
    // let i = 0;
    // while (i + k <= arr.length - 1) {
    //     let leftABs = x- arr[i];
    //     let rightABs = arr[i + k] - x;
    //     if (leftABs > rightABs) {
    //         i++
    //     }
    //     else if (leftABs <= rightABs) {
    //         return arr.slice(i, i + k)
    //     }   
    // }
    // return arr.slice(i, i + k)
    // n - k + 1
    // = 10 - 4 + 1
    // = 7 windows
    // TC: O(n-k)=> O(n)
    // SC: O(1)

    // binary search
    // let l = 0;
    // let r = arr.length - 1;

    // while (l < r) {
    //     let m = l + Math.floor((r - l) / 2);
    //     console.log(arr[m + k])
    //     if (x - arr[m] > arr[m + k] - x) {
    //         l = m + 1;
    //     } else {
    //         r = m;
    //     }
    // }
    // return arr.slice(l, l + k)

    // Day 2 linear search===> approach
    // let i = 0;

    // while (i + k <= arr.length - 1) {
    //     let start = x - arr[i];
    //     let end = arr[i + k] - x;
    //     console.log(i, '=>', i + k)
    //     if (start > end) {
    //         i++
    //     } else if (start <= end) {
    //         return arr.slice(i, i + k)
    //     }
    // }
    // return arr.slice(i, i + k)

    // TC: O(n-k);
    // SC: O(1)

    // Day 2 binary search==========

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let middle = left + Math.floor((right - left) / 2)
        let leftStart = x - arr[middle];
        let rightEnd = arr[middle + k] - x;
        console.log(middle,'=>',middle+k)
        if (leftStart > rightEnd) {
            left = middle + 1;
        } else {
            right = middle
        }
    }

    return arr.slice(left, left + k);

    // TC: O(log n)
    // SC: O(1)
};