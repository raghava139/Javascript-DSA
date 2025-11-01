// =>Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
function MoveZeros(nums){

    // 1st approach;
    // let position = 0;
    // for(let i=0;i<nums.length; i++){

    //     if(nums[i] !==0){
    //        let temp = nums[position];
    //        nums[position] = nums[i];
    //        nums[i] = temp;
    //        position++;
    //     }
    // }
    // console.log(nums)

    //2nd approach;
    let position = 0;
    for(let i=0; i< nums.length; i++){
        if(nums[i] !==0){
            nums[position] = nums[i];
            position++;
        }
    }
    for(let i=position;i<nums.length;i++){
        nums[i] = 0;
    }
    console.log(nums)
}

// let nums = [0,1,0,3,12];
let nums = [0,0,0,0];
MoveZeros(nums);