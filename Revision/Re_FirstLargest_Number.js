function firstLargetNumber(arr) {
    //first approach (brute force);
    // let first = Math.max(...arr);

    //second Approach;
    // let maxCount = 0;
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i] > maxCount){
    //         maxCount = arr[i];
    //     }
    // }
    // return maxCount;

    //clean && edge cases
    if (arr.length === 0) return null;
    let maxCount = -Infinity;
    for (let currCount of arr) {
        if (currCount > maxCount) maxCount = currCount;
    }
    return maxCount;

}

let arr = [5, 0, 7, 10, 8, 17, 1, 100, 3];
console.log(firstLargetNumber(arr));


// TC: O(n);
// SC: O(1);