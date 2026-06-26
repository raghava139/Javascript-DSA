/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    // let left = 1;
    // let right = n;

    // while(left <= right){
    //     let middle = left + Math.floor((right - left)/2);
    //     let picked = guess(middle);
    //     if(picked === 0){
    //         return middle;
    //     }
    //     else if(picked < 0){
    //         right = middle - 1
    //     }else{
    //         left = middle + 1;
    //     }
    // }
    // return -1;

    // TC: O(log n)
    // SC: O(1)

    // Day 2 revision
    // let left = 1;
    // let right = n;
    // while(left <= right){
    //     let middle = left + Math.floor((right-left)/2);
    //     let assume = guess(middle);
    //     console.log(assume);
    //     if(assume === 0){
    //         return middle;
    //     }else if(assume > 0){
    //         left = middle + 1;
    //     }else{
    //         right = middle - 1;
    //     }
    // }
    // // TC: O(log n);
    // SC: O(1)
    let left = 1;
    let right = n;
    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);
        let response = guess(middle);
        if (response === 0) {
            return middle;
        }
        else if (response < 0) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    // TC: O(log n)
    // SC: O(1)
};