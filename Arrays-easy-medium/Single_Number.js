// => Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. 
// Find that single one.You must implement a solution with a linear runtime complexity
//  and use only constant extra space.
function SingleNumber(nums){

    //first approach using hash map
    // let hash = {};

    // for(let i=0;i<nums.length;i++){
    //     if(!hash[nums[i]]){
    //         hash[nums[i]] = 1
    //     }
    //     else{
    //         hash[nums[i]] += 1
    //     }
    // }

    // for(let i=0;i<nums.length;i++){
    //     if(hash[nums[i]] === 1){
    //         return nums[i];
    //     }
    // }

    //2nd Approach using XOR (Bitwise Operator)
    let XOR = 0;
    for(let i=0;i<nums.length;i++){
        XOR = XOR ^ nums[i];
    }
    console.log(XOR)
    return XOR;

}

let nums= [4,1,2,1,2]
SingleNumber(nums);