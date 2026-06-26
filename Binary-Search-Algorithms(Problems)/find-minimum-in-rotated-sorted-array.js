/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (arr) {
    // let left = 0;
    // let right = arr.length-1;

    // while(left <= right){
    //     let middle = left + Math.floor((right-left)/2);

    //     if(arr[left] <= arr[right]){
    //         return arr[left];
    //     }

    //     if(arr[left] <= arr[middle]){
    //         left = middle + 1
    //     }else{
    //         right = middle;
    //     }
    // }
    // return left

    // Day 2 revision
    // return Math.min(...arr)

    // using Linear search
    // let min = arr[0]
    // for(let i=0 ;i<arr.length;i++){
    //     if(arr[i] < min){
    //         min = arr[i]
    //     }
    // }
    // return min;


    //using binary search
    // let left = 0;
    // let right = arr.length - 1;
    // while (left <= right) {
    //     let middle = left + Math.floor((right - left) / 2)
    //     if (arr[left] <= arr[right]) {
    //         return arr[left]
    //     }
    //     if (arr[left] <= arr[middle]) {
    //         left = middle + 1;
    //     } else {
    //         right = middle;
    //     }
    // }
    // return left;

    // TC: O(log n);
    // SC: O(1)

    // Day 10 revision
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);
        if (arr[left] <= arr[right]) {
            return arr[left]
        };

        if (arr[left] <= arr[middle]) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }

    return left;
};