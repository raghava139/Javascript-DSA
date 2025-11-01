// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
// The order of the elements may be changed.
// Then return the number of elements in nums which are not equal to val.
// Consider the number of elements in nums which are not equal to val be k, to get accepted, 
// you need to do the following things:
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
// The remaining elements of nums are not important as well as the size of nums.
// Return k.

function RemoveElement(nums,value){
    let x = 0;

    for(let i = 0; i<nums.length; i++){
        if(nums[i] !== value){
            nums[x] = nums[i];
            x = x+1;
        }
        console.log(nums);
    }
    console.log(x)
    return x;
}
let nums = [1,2,4,1,8,1,2],value = 1
// let nums = [3,2,1,5,3,4,8,3],value = 3
RemoveElement(nums,value);