function Recount(arr){
    let count = 0;
    for(let val of arr){
        if(val < 0) count++;
    }
    return count;
}
let arr = [2,-9, 17,-8,1,-10,-4,8];
console.log(Recount(arr))

// TC: O(n);
// SC: O(1);