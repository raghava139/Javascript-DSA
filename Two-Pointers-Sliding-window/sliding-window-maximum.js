/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(arr, k) {
    //Day 2 ===revision====
    let resultArr = [];
    for(let i = 0;i<arr.length;i++){
        let j = i+k;
        let maxWs = 0;
        for(let x = i ; x < j ;x++){
            maxWs = Math.max(maxWs, arr[x])
        }
        resultArr.push(maxWs);
    }
    return resultArr;
};