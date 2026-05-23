function SearchAnElement(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}
let target = 10;
let arr = [4, 2, 0, 10, 8, 30];
console.log(SearchAnElement(arr, target));