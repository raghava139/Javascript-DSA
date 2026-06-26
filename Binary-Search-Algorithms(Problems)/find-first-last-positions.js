/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (arr, target) {

    // // find the first position index
    // let left = 0;
    // let right = arr.length - 1;
    // let ans = [-1, -1];

    // while (left < right) {
    //     let middle = left + Math.floor((right - left) / 2);
    //     if (arr[middle] < target) {
    //         left = middle + 1;
    //     } else {
    //         right = middle;
    //     }
    // }
    // if (arr[left] === target) ans[0] = left;

    // //find the second position of index
    // left = 0;
    // right = arr.length - 1;

    // while (left < right) {
    //     let middle = left + Math.ceil((right - left) / 2);
    //     if (arr[middle] > target) {
    //         right = middle - 1;
    //     } else {
    //         left = middle;
    //     }
    // }
    // if (arr[right] === target) ans[1] = right;

    // return ans

    // // TC: O(log n) + O(log n) => O(log n)
    // // SC: O(1)

    // 2nd approach
    // let left = 0;
    // let right = arr.length - 1;
    // let ans = [-1,-1];

    // while (left <= right) {
    //     let middle = left + Math.floor((right - left) / 2);
    //     if(arr[middle] === target){
    //         ans[0] = middle
    //         right = middle - 1;
    //     }
    //     else if (arr[middle] < target) {
    //         left = middle + 1;
    //     } else {
    //         right = middle - 1;
    //     }
    // }

    // left = 0;
    // right = arr.length - 1;

    // while(left <= right){
    //     let middle = left + Math.floor((right - left) / 2);
    //     if(arr[middle] === target){
    //         ans[1] = middle;
    //         left = middle + 1;
    //     }
    //     else if(arr[middle] < target){
    //         left = middle + 1;
    //     }else{
    //         right = middle - 1;
    //     }
    // }
    // return ans;

    //============Day 2 Revision===========
    // let left = 0;
    // let right = arr.length-1;
    // let ans = [-1,-1];

    // while(left < right){
    //     let middle = left + Math.floor((right-left)/2);
    //     if(arr[middle] < target){
    //         left = middle + 1;
    //     }else{
    //         right = middle
    //     }
    // }

    // if(arr[left] === target) ans[0] = left;

    // left = 0;
    // right = arr.length-1;

    // while(left < right){
    //     let middle = left + Math.ceil((right-left)/2);
    //     if(arr[middle] > target){
    //         right = middle - 1;
    //     }else{
    //         left = middle
    //     }
    // }

    // if(arr[right] === target) ans[1] = right;

    // return ans;
    // TC: O(log n) + O(log n) => O(log n)
    // SC: O(1)

    // day 10 revision
    // let left = 0;
    // let right = arr.length - 1;
    // let ans = [-1, -1];

    // while (left <= right) {
    //     let middle = left + Math.floor((right - left) / 2);
    //     if (arr[middle] === target) {
    //         ans[0] = middle;
    //     }
    //     if (arr[middle] < target) {
    //         left = middle + 1;
    //     } else {
    //         right = middle - 1;
    //     }
    // }

    // left = 0;
    // right = arr.length - 1;

    // while (left <= right) {
    //     let middle = left + Math.floor((right - left) / 2);
    //     if (arr[middle] === target) {
    //         ans[1] = middle;
    //     }
    //     if (arr[middle] > target) {
    //         right = middle - 1;
    //     } else {
    //         left = middle + 1;
    //     }
    // }

    // return ans;

    // TC: O(log n);
    // SC: O(1)

    // Day 10 revision========
    // let left = 0;
    // let right = arr.length - 1;
    // let ans = [-1, -1];

    // while (left < right) {
    //     let middle = left + Math.floor((right - left) / 2);

    //     if (arr[middle] < target) {
    //         left = middle + 1;
    //     } else {
    //         right = middle;
    //     }
    // }

    // if (arr[left] === target) ans[0] = left;

    // left = 0;
    // right = arr.length - 1;

    // while (left < right) {
    //     let middle = left + Math.ceil((right - left) / 2);
    //     if (arr[middle] > target) {
    //         right = middle - 1;
    //     } else {
    //         left = middle;
    //     }
    // }

    // if (arr[right] === target) ans[1] = right;

    // return ans;

    // TC: O(log n) + O(log n) => O(log n)
    // SC: O(1)

    // DAY 10 Revision=======
    // 2nd approach
    let left = 0;
    let right = arr.length - 1;
    let ans = [-1, -1]
    //first check the first position
    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);
        if (arr[middle] === target) {
            ans[0] = middle;
            right = middle - 1;
        }
        else if (arr[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    if (arr[left] === target) ans[0] = left;

    // second check the last position
    left = 0;
    right = arr.length - 1;
    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);
        if (arr[middle] === target) {
            ans[1] = middle;
            left = middle + 1;
        }
        else if (arr[middle] > target) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    if (arr[right] === target) ans[1] = right;
    return ans;

    // TC: O(log n) + O(log n) = O(log n);
    // SC: O(1)
};