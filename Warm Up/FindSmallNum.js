function FindSmallestValue(arr){
    let smallestNumber = Infinity;
    for(let i=0;i<arr.length; i++){
        if(arr[i] < smallestNumber){
            smallestNumber = arr[i];
        }
    }
    return smallestNumber;
}

let arr =[10,20,40,5,6];
let SmallValue = FindSmallestValue(arr);
console.log(SmallValue);