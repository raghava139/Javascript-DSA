function searchAnElement(arr,target) {
    for(let i=0;i<arr.length;i++){
        if(arr[i] === target){
            return i;
        }
    }

    return -1
}
let arr = [33, 44, 55, 66, 77], target = 77;
let search = searchAnElement(arr, target);
console.log(search);