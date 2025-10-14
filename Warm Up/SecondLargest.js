function SecondLargest (arr) {
 //If Array is empty or less than 2 it return null
    if(arr.length < 2){
        return null;
    }
    let LargestValue = -Infinity;
    let SecondLargestValue = -Infinity;
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] > LargestValue){
            SecondLargestValue = LargestValue;
            LargestValue = arr[i];
        }
        
        // else if(arr[i] > SecondLargestValue){
        //     SecondLargestValue = arr[i];
        // }
        
        //if values are Duplicates
        else if(arr[i] > SecondLargestValue && arr[i] !== LargestValue){
            SecondLargestValue = arr[i];
        }
    }

    return SecondLargestValue;
}
let arr = [4,9,0,2,8,7,1,9];
let arrResult = SecondLargest(arr);
console.log(arrResult);

//corner cases
//---How it Works---
// 1.If array is empty (working)
// 2.If array elements are less than 2  ( working )
// 3.If Elements are Negative
// 4.If Elements are Duplicates
