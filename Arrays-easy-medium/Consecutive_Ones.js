// => Max Consecutive Ones
// Given a binary array nums, return the maximum number of consecutive 1's in the array.


function ConsecutiveOnes(nums){
    let current = 0;
    let maxCount = 0;
   if(nums.length>0){
    for(let i=0;i<nums.length;i++){
            if(nums[i] == 1){
                current++;
            }else{

                //best approach
                maxCount = Math.max(current,maxCount);
                current = 0;

                //tried approach
                // if(current > maxCount){
                //     maxCount = current;
                // }
                // current = 0
            }
        }
     console.log(Math.max(current,maxCount))
     return Math.max(current,maxCount);
   }
   return;
}

let nums = [];
ConsecutiveOnes(nums);