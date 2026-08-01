/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (arr) {

    // Brute Force Approach
    //   let max = -Infinity;
    //   for(let i=0;i<arr.length-1;i++){
    //     for(let j=i+1;j<arr.length;j++){
    //         let area  = Math.min(arr[i],arr[j]) * (j-i);
    //         if(area > max){
    //             max = area;
    //         }
    //     }
    //   } 
    //   return max;
    //   TC: O(n2)
    //   SC: O(1)

    // using two pointers approach + Greedy
    // let i = 0;
    // let j = arr.length - 1;
    // let max = -Infinity;
    // while (i < j) {
    //     let area = Math.min(arr[i], arr[j]) * (j - i);
    //     if (area > max) {
    //         max = area;
    //     }

    //     if (arr[i] < arr[j]) {
    //         i++
    //     } else {
    //         j--;
    //     }
    // }
    // return max;

    // DAY 2 
    // brute force approach
    // let maxAmtOfWater = 0;

    // for (let i = 0; i < arr.length - 1; i++) {
    //     for (let j = 0; j < arr.length; j++) {
    //         let width = j - i;
    //         let height = Math.min(arr[i], arr[j])
    //         let area = width * height;

    //         if (area > maxAmtOfWater) {
    //             maxAmtOfWater = area;
    //         }
    //     }
    // }
    // return maxAmtOfWater;

    // TC: O(n2);
    // SC: O(1);


    // Day 2 ======revision====
    // let maxAmntOfWater = 0;
    // let i = 0;
    // let j = arr.length - 1;

    // while (i < j) {
    //     let width = (j - i)
    //     let height = Math.min(arr[i], arr[j])
    //     let area = width * height;


    //     // need an max area value
    //     if (area > maxAmntOfWater) {
    //         maxAmntOfWater = area;
    //     }


    //     // small value impacts 
    //     if (arr[i] < arr[j]) {
    //         i++
    //     } else {
    //         j--
    //     }
    // }

    // return maxAmntOfWater;

    // TC: O(n);
    // SC: O(1);

    // Day 5 ===> revision <=====
    // Brute Force Approach;
    // let MaxContainWater = 0;
    // for(let i = 0; i<arr.length-1; i++){
    //     for(let j =i+1; j<arr.length; j++){
    //         let width = j-i;
    //         let height = Math.min(arr[i],arr[j])
    //         let area = width * height;
    //         MaxContainWater = Math.max(MaxContainWater,area)
    //     }
    // }
    // return MaxContainWater
    // TC: O(nxn) => O(n2)
    // SC: O(1)

    // approach 2 using two pointers + Greedy
    let i = 0;
    let j = arr.length;

    let maxContainWater = 0;

    while (i < j) {
        let width = j - i;
        let height = Math.min(arr[i], arr[j]);
        let area = width * height;
        if (area > maxContainWater) {
            maxContainWater = area;
        }

        if (arr[i] < arr[j]) {
            i++
        } else {
            j--
        }
    }
    return maxContainWater;
    // TC: O(n)
    // SC: O(1)
};