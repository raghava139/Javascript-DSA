function toCountNegativeValues (arr){
    
    let count = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0){
            count = count+1
        }
    }
    return count

}
let arr = [2,-9,17,8,1,-10,-4,8];
let checkCounts = toCountNegativeValues(arr);
console.log(checkCounts);