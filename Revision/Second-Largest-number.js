// Find the Second Largest Number
function secondLargestNumber(arr) {
    let fL = -Infinity;
    let sL = -Infinity;
    if(arr.length == 0) return null;
    if(arr.length == 1) return 'there is no second Largest'

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === fL){
            continue;
        }
        if (arr[i] > fL) {
            sL = fL;
            fL = arr[i];
        } 
        else if (arr[i] > sL) {
            sL = arr[i];
        }
    }
    return sL === -Infinity ? 'there is no second Largest':sL;
}
// let arr = [10,20,50,100,18]
// let arr = [10, 20, 20, 15]
let arr = [1,1,1,1,1,1]
let secondLAR = secondLargestNumber(arr);
console.log(secondLAR)