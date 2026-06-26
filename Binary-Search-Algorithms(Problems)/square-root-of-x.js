/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    // inbuilt methods
    // let y = Math.sqrt(x);
    // return Math.floor(y)

    // // linear search
    // if (x <2 ) return x;
    // let prev = 0;
    // for (let i = 2; i < x; i++) {
    //     let n = i * i
    //     if ((n) > x) {
    //         return prev;
    //     }
    //     prev = i
    // }
    // return prev;

    //binary search...
    // if (x < 2) return x;
    // let left = 2;
    // let right = Math.floor(x / 2);

    // while (left <= right) {
    //     let middle = left +  Math.floor((right-left) / 2) // best practice of writing like this
    //             console.log(middle * middle)
    //     if (x === middle * middle) {
    //         return middle;
    //     }
    //     else if (x < middle * middle) {
    //         right = middle - 1
    //     } else {
    //         left = middle + 1;
    //     }
    // }
    // return right;


    // Day 2 Revision

    // 1st approach inbuilt methods
    // return Math.trunc(Math.pow(x,0.5))
    // TC: O(1), SC:O(1)

    //2nd approach which is Linear Search
    // if(x < 2) return x;
    // let n = Math.floor(x / 2);
    // let prev = 0;
    // for (let i = 1; i <= n; i++) {
    //     if((i*i) > x){
    //         return prev;
    //     }
    //     prev = i
    // }
    // return prev;
    //  TC: O(n), SC:O(1)

    // 3rd Approach which is binary Search
    // if (x < 2) return x;

    // let n = Math.floor(x / 2);

    // let left = 2;
    // let right = n;

    // while (left <= right) {
    //     let middle = left + Math.floor((right - left) / 2);
    //     if (x === (middle * middle)) {
    //         return middle;
    //     }
    //     else if (x < (middle * middle)) {
    //         right = middle - 1;
    //     }
    //     else {
    //         left = middle + 1;
    //     }
    // }
    // return right;
    //  TC: O(log n), SC:O(1)

    // Day 10 Revision
    // first approach
    // return Math.trunc(Math.pow(x,0.5));

    //second approach
    // if (x < 2) return x;
    // let prev = 0;
    // for (let i = 1; i < x; i++) {
    //     if (x < (i * i)) {
    //         return prev;
    //     }
    //     prev = i;
    // }
    // return prev;
    // if(x < 2) return x
    // let left = 2;
    // let right = Math.floor(x/2)

    // while(left <= right){
    //     let middle = left + Math.floor((right - left)/2) 
    //     if(x === (middle * middle)){
    //         return middle;
    //     }else if(x < (middle*middle)){
    //         right = middle - 1;
    //     }else{
    //         left = middle + 1;
    //     }
    // }
    // return right;

    // Day 10 Revision (+day 5 mistake)
    if (x < 2) return x;
    let left = 2;
    let right = Math.floor(x / 2);

    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);
        if (x === (middle * middle)) {
            return middle;
        } else if (x > (middle * middle)) {
            left = middle + 1
        } else {
            right = middle - 1;
        }
    }
    return right;
};