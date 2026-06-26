/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (arr) {
    // let left = 0;
    // let right = arr.length-1

    // while(left <= right){
    //     let middle = left + Math.floor((right-left)/2);
    //     //left pair
    //     if(arr[middle] === arr[middle-1]){
    //         let leftCount = middle-1-left;
    //         if(leftCount % 2 === 1){
    //             right = middle - 2
    //         }else{
    //             left = middle + 1;
    //         }
    //     }
    //     //right pair
    //     else if(arr[middle] === arr[middle + 1]){
    //         let leftCount = middle - left;
    //         if(leftCount % 2 === 1){
    //             right = middle - 1;
    //         }else{
    //             left = middle + 2
    //         }
    //     }
    //     // if find the single element
    //     else {
    //         return arr[middle];
    //     }
    // }

    // TC: O(log n)
    // SC: O(1)

    // DAY 2 Revision=========
    // let left = 0;
    // let right = arr.length - 1;

    // while (left <= right) {
    //     let middle = left + Math.floor((right - left) / 2);

    //     //left pair
    //     if (arr[middle] === arr[middle - 1]) {
    //         let leftCount = middle - 1 - left;
    //         if (leftCount % 2 === 1) {
    //             right = middle - 2;
    //         } else {
    //             left = middle + 1;
    //         }
    //     }

    //     //right pair
    //     else if (arr[middle] === arr[middle + 1]) {
    //         let leftCount = middle - left;
    //         if (leftCount % 2 === 1) {
    //             right = middle - 1
    //         } else {
    //             left = middle + 2;
    //         }
    //     }

    //     //if it is single elmement then we found correct single element
    //     else {
    //         return arr[middle];
    //     }
    // }
    // TC: O(log n);
    // SC: O(1);


    //===========Day 10 revision==============
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);

        //left pair
        if (arr[middle] === arr[middle - 1]) {
            let ODD = middle - 1 - left;
            if (ODD % 2 === 1) {
                right = middle - 2
            } else {
                left = middle + 1;

            }
        }

        //right pair
        else if (arr[middle] === arr[middle + 1]) {
            let ODD = middle - left;
            if (ODD % 2 === 1) {
                right = middle - 1;
            } else {
                left = middle + 2;

            }
        }

        //return the single element
        else {
            return arr[middle];
        }
    }

    // TC: O(log n)
    // SC: O(1)
};