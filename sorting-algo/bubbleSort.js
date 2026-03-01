// function bubbleSort(arr){
//     let n = arr.length;
//     debugger
//     console.log(n)
//     for(let i=0;i<n-1;i++){
//         for(let j=0;j<n-1-i;j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// let arr = [5,2,4,1];
// bubbleSort(arr)
// console.log(arr)

// for example if it is already then how you can right?
function bubbleSort(arr){
    let n = arr.length;
    console.log(n);
    for(let i=0;i<n-1;i++){
        let isSwapped = false;
        for(let j=0;j<n-1-i;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }
        }
        if(!isSwapped) break;
    }
    return arr;
}
let arr = [9,1,2,3,4];
bubbleSort(arr)
console.log(arr)

// TC: O(n)
// SC: O(1)
