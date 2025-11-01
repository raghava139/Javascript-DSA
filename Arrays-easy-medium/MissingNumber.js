// =>Missing Number
// Given an array nums containing n distinct numbers in the range [0, n],
//  return the only number in the range that is missing from the array.


function MissingNumber(nums,n){

    let totalLength= nums?.length;
    let SumofALL = totalLength*(totalLength+1)/2; // =>  n*(n+1)/2 => sum Formula...
    let totalSum = 0;

    for(let i=0;i<totalLength; i++){
        totalSum= totalSum + nums[i]
    }
    console.log(SumofALL- totalSum)
    return SumofALL - totalSum ;

}
let nums = [4,0,1,2,5] , n = 5;
MissingNumber(nums, n)