/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (arr, target) {
    // let i = 0;
    // let j = arr.length - 1;

    // while (i < j) {
    //     let sum = arr[i] + arr[j];
    //     if (sum === target) {
    //         return [i + 1, j + 1];
    //     } else if (sum > target) {
    //         j--;
    //     } else {
    //         i++;
    //     }
    // }

    // TC: O(n)
    // SC: O(1)

    //========Day 2 revision===========
    // let i = 0;
    // let j = arr.length - 1;

    // while (i < j) {
    //     let sum = arr[i] + arr[j];
    //     if (sum === target) {
    //         return [i + 1, j + 1];
    //     } else if (sum < target) {
    //         i++
    //     } else {
    //         j--;
    //     }
    // }

    // TC: O(n);
    // SC: O(1);

    // Day 10 revision========
    // brute force approach
    // for(let i=0 ; i<arr.length-1; i++){
    //     for(let j=i+1; j<arr.length; j++){
    //         if(arr[i] + arr[j] === target){
    //             return [i+1, j+1]
    //         }
    //     }
    // }
    // TC: O(n2);
    // SC: O(1);

    // Day 10 revision=============
    // optimal approach using two pointers
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let sum = arr[i] + arr[j];
        if (sum === target) {
            return [i + 1, j + 1];
        }
        else if (sum > target) {
            j--;
        } else {
            i++;
        }
    }
    // TC: O(n)
    // SC: O(1)
};