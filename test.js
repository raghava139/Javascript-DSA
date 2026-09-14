const nums = [];

// function sum(nums) {
//     let result = [];
//     for (let i = 0; i < nums.length; i++) {
//         result.push(nums[i] * 2)
//     }
//     return result;
// }
// let result = sum(nums);
// console.log(result);


// const reduceFn = nums.reduce(function (accumaltor, currentvalue, index, array) {
//     // console.log('acc',accumaltor)
//     accumaltor = accumaltor + currentvalue;
//     return accumaltor;
// }, 0)

// console.log(reduceFn)


Array.prototype.myReduce = function (callback, initialValue) {
    let accumaltor;
    let startIndex = 0;

    if (this.length === 0 && arguments.length < 2) {
        throw new TypeError('Reduce an empty array with no initial value ')
    }
    if (arguments.length > 1) {
        accumaltor = initialValue;
    } else {
        accumaltor = this[0];
        startIndex = 1;
    }
    for (let i = startIndex; i < this.length; i++) {
        accumaltor = callback(accumaltor, this[i], i, this)
    }

    return accumaltor;
}


const reduceFn = nums.reduce(function (accumaltor, currentvalue, index, array) {
    // console.log('acc',accumaltor)
    accumaltor = accumaltor + currentvalue;
    return accumaltor;
}, 0)

console.log(reduceFn)