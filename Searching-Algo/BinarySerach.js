function BinarySearchAlg(nums,target){
    let left = 0;
    let right = nums.length-1;

    while(right >= left){
        let middle = Math.floor((left+right)/2);

        if(target === nums[middle]){
            return middle;
        }
        else if(target > nums[middle]){
            left = middle + 1;
        }
        else {
            right = middle - 1;
        }
    }
    return -1
}
let nums =   [4, 8, 15, 16, 23, 42]
let target = 4
BinarySearchAlg(nums,target)
