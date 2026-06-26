/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {

    // Linear Search => TC:O(n) , SC:O(1);
    // let max = arr[0];
    // let index = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > max) {
    //         max = arr[i];
    //         index = i
    //     }
    // }
    // return index;

    //Binary Search;
    // // my own aproach
    // let left = 0;
    // let right = arr.length-1;
    // let ans = 0,index = 0;

    // while(left <= right){
    //     let middle = left + Math.floor((right-left)/2);
    //     if(arr[middle] < arr[middle+1]){
    //         left = middle + 1;
    //     }else{
    //         right = middle
    //     }
    //     if(arr[middle] > ans){
    //         ans = arr[middle];
    //         index = middle
    //     }
    // }
    // return index;

    //APPROACH
    // let left = 0;
    // let right = arr.length-1;

    // while(left < right){
    //     let middle = left + Math.floor((right-left)/2);
    //     if(arr[middle] < arr[middle+1]){
    //         left = middle + 1;
    //     }else{
    //         right = middle
    //     }
    // }
    // return right;


    // let left = 0;
    // let right = arr.length - 1;

    // while (left < right) {
    //     let middle = left + Math.floor((right - left) / 2);
    //     if (arr[middle] < arr[middle + 1]) {
    //         left = middle + 1;
    //     } else {
    //         right = middle
    //     }
    // }
    // return right;

    //=============Day 10 revision==========================
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let middle = left + Math.floor((right - left) / 2);

        if (arr[middle] < arr[middle + 1]) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }
    return right;

    //TC: O(log n)
    //SC: O(1)

};