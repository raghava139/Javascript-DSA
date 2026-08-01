/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    // //sort the array;
    // let arr = nums.sort((a, b) => a - b);

    // //output array;
    // let ans = [];

    // for (let x = 0; x < arr.length; x++) {

    //     //don't allow the same value again
    //     if (arr[x] !== arr[x - 1]) {
    //         twoSum(arr, x, ans);
    //     }
    // }
    // return ans;

    // Day 2 approach using one pointer fixed & two pointers;
    //sort the array;
    let arr = nums.sort((a, b) => a - b)
    let ans = [];
    for (let x = 0; x < arr.length; x++) {
        if (arr[x - 1] !== arr[x]) {
            twoSum(arr, x, ans);
        }
    }
    return ans;
};
// Time Complexity:
// O(n log n) + O(n²) = O(n²)

// Space Complexity:
// Auxiliary Space: O(1)
// Output Space: O(k) //k = number of triplets

// function twoSum(arr, x, ans) {
//     let i = x + 1;
//     let j = arr.length - 1;

//     while (i < j) {
//         let sum = arr[i] + arr[j] + arr[x];

//         // if it is valid push to output array
//         if (sum === 0) {
//             ans.push([arr[i], arr[j], arr[x]]);
//             i++;
//             j--;
//             // skip the duplicates either i or j  or else both also you can enable;
//             // while(i<j && arr[j] === arr[j+1]) j--;
//             while(i<j && arr[i] === arr[i-1]) i++;
//         } 
//         else if (sum > 0) {
//             j--;
//         } else {
//             i++;
//         }
//     }
// }


// Day 2 approach using one pointer fixed & two pointers;
function twoSum(arr, x, ans) {
    let i = x + 1;
    let j = arr.length - 1;

    while (i < j) {
        let sum = arr[i] + arr[j] + arr[x];
        if (sum === 0) {
            ans.push([arr[i], arr[j], arr[x]]);
            i++; j--;
            while (i < j && arr[i] === arr[i - 1]) i++;
        } else if (sum < 0) {
            i++;
        } else {
            j--;
        }
    }
}