function LargestNumber(arr){
    let largest = -Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }

    return largest;
}
let arr = [10,20,50,100,18,12,200];
let largest = LargestNumber(arr);
console.log(largest)