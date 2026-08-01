function NegativeNumbers(arr){
    let count = 0; 
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0){
            count++;
        }
    }
    return count;
}
let arr = [3,-1,2,-5,4,-9,-10]
let NegativeFunc = NegativeNumbers(arr)
console.log(NegativeFunc)