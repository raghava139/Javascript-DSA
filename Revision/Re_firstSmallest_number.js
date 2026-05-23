function firstSmallestNumber(arr) {
    //first approach (brute force);
    // let first = Math.m(...arr);

    //second Approach;
    // let minCount = 0;
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i] < minCount){
    //         minCount = arr[i];
    //     }
    // }
    // return maxCount;

    //clean && edge cases
    if (arr.length === 0) return null;
    let minCount = Infinity;
    for (let currCount of arr) {
        if (currCount < minCount) minCount = currCount;
    }
    return minCount;

}

let arr = [5, 0, -7, 10, 8, -17, 1, -100, 3];
console.log(firstSmallestNumber(arr));

// TC: O(n);
// SC: O(1);