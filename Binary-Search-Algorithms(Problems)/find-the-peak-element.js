/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (arr) {
    // let left = 0;
    // let right = arr.length - 1;
    // while(left < right){
    //     let middle = left + Math.floor((right-left)/2);

    //     if(arr[middle] < arr[middle+1]){
    //         left = middle + 1;
    //     }else{
    //         right = middle;
    //     }
    // }
    // return right;

    // TC: O(log n);
    // SC: O(1);


    // day 2 revision;
    // let left = 0;
    // let right = arr.length-1;

    // while(left < right){
    //     let middle = left + Math.floor((right-left)/2);

    //     if(arr[middle] < arr[middle+1]){
    //         left = middle + 1;
    //     }else {
    //         right = middle;
    //     }
    // }

    // return left;

    // TC: O(log n)
    // SC: O(1)

    // ======Day 10 revision==================
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let middle = left + Math.floor((right - left) / 2);
        if (arr[middle] < arr[middle + 1]) {
            left = middle + 1;
        }
        else {
            right = middle;
        }
    }

    return left;
};