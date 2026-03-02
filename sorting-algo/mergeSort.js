var sortArray  = function(nums) {
    debugger;
    if(nums.length <= 1) return nums;
    let mid = Math.floor((nums.length)/2);
    let left = sortArray(nums.slice(0,mid));
    let right = sortArray(nums.slice(mid));
    return merge(left,right)
};

function merge(leftArr,rightArr){

    let i = 0;
    let j = 0;
    let result = [];

    while(i < leftArr.length && j< rightArr.length){

        if(leftArr[i] < rightArr[j]){
            result.push(leftArr[i]);
            i++
        } else{
            result.push(rightArr[j]);
            j++
        }
    }
    return [...result,...leftArr.slice(i),...rightArr.slice(j)];
}

let arr = [8,4,5,6,9,1,3,6];
// sortArray(arr)
console.log(sortArray(arr))


//TC && SC
//TC: O(n log n);
//Sc: O(n);