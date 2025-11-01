// Write a function that reverses a string. 
// The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

function ReverseString(nums){

    let totalLength = nums.length;
    let HalfLength = Math.floor(totalLength/2);

    for(let i=0; i<HalfLength; i++){
        let temp = nums[i]; //storing the value inside temp variable;
        nums[i] = nums[totalLength-1-i];
        nums[totalLength-1-i] = temp;
    }
    console.log(nums)
   

}

let nums = ['r','a','g','h','a','v','a']

ReverseString(nums)