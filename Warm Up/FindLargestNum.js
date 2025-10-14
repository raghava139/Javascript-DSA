function FindLargest (arr){
    let LargestNumber = -Infinity;

    for(let i=0;i<arr.length; i++){
        if(arr[i] > LargestNumber){
            LargestNumber = arr[i];
        }
    }
    return LargestNumber;
}

let arr = [5,0,7,10,8 ,17,1]
let result = FindLargest(arr)

console.log(result);