function SmallestNumber(arr){
    let smallest = Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }
    return smallest;
}
let arr = [10,20,50,100,13,12,200];
let smallest = SmallestNumber(arr);
console.log(smallest)