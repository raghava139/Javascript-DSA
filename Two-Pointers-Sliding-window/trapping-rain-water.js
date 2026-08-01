/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(arr) {
    
    //find the max left
    let maxLeft = [arr[0]]
    for(let i = 1;i<arr.length;i++){
        maxLeft[i] = Math.max(maxleft[i-1],arr[i])
    }

    //find the max right;
    let maxRight = [];
    maxRight[arr.length-1] = arr[arr.length-1];
    for(let i=arr.length-2; i>=0; i--){
        maxRight[i] = Math.max(maxRight[i+1],arr[i])
    }

    //find both min(maxLeft,maxRight);
    let ans = 0;
    for(let i = 0; i<arr.length; i++){
        let minHeight = Math.min(maxLeft[i],maxRight[i])
        ans = ans + (minHeight - arr[i]);
    }
    return ans;
};