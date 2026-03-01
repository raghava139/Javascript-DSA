function insertionSort(arr) {
    let n = arr.length;
    // debugger;

    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let previous = i - 1;

        while(arr[previous] > current && previous >=0){
            arr[previous+1] = arr[previous];
            previous--;
        }
        arr[previous+1] = current;

        console.log(arr)

    }
    return arr;
}
let arr = [8,3,5,2,9,1,7]
insertionSort(arr)
console.log(arr)