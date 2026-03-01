
function SelectionSort(arr) {
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {
        let min = i;

        //keep on looping until getting min value
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        //swapping technique
        if (min !== i) { //if the index same we cann't repeat the swapping.
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}
let arr = [4, 5, 1, 3, 9];
SelectionSort(arr)

// TC: O(n2)
// SC: O(1)

//In these trick we are selecting the MIN value and swapping the value;