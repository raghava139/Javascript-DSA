/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (arr, target) {
    //     let left = 0;
    //     let right = arr.length - 1;

    //     while (left <= right) {
    //         let middle = left + Math.floor((right - left) / 2);
    //         if (arr[middle] === target) {
    //             return middle;
    //         }
    //         //left sorted
    //         if (arr[left] <= arr[middle]) {
    //             if (target >= arr[left] && target < arr[middle]) {
    //                 right = middle - 1;
    //             } else {
    //                 left = middle + 1
    //             }
    //         }
    //         //right sorted
    //          else {
    //             if (target > arr[middle] && target <= arr[right]) {
    //                 left = middle + 1;
    //             } else {
    //                 right = middle - 1;
    //             }
    //         }
    //     }
    //     return -1;
    //     // TC: O(log n)
    //     // SC: O(1)

    // DAY 2 Revision
    // let left = 0;
    // let right = arr.length - 1;

    // while (left <= right) {
    //     let middle = left + Math.floor((right - left) / 2);
    //     if (arr[middle] === target) {
    //         return middle;
    //     }
    //     if (arr[left] <= arr[middle]) {
    //         if (target >= arr[left] && target < arr[middle]) {
    //             right = middle - 1
    //         } else {
    //             left = middle + 1;
    //         }
    //     }
    //     else {
    //         if (target <= arr[right] && target > arr[middle]) {
    //             left = middle + 1;
    //         } else {
    //             right = middle - 1;
    //         }
    //     }
    // }
    // return -1;

    // TC: O(log n);
    // SC: O(1);

    // Day 10 revision
    let left = 0;
    let right = arr.length - 1;


    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);

        //mid point
        if (arr[middle] === target) {
            return middle;
        }

        // left sorted
        if (arr[left] <= arr[middle]) {
            if (target >= arr[left] && target < arr[middle]) {
                right = middle - 1
            } else {
                left = middle + 1;
            }
        } 
        //right sorted
        else {
            if (target <= arr[right] && target > arr[middle]) {
                left = middle + 1
            } else {
                right = middle - 1
            }
        }
    }

    return -1;

    // TC: O(log n)
    // SC: O(1)
};