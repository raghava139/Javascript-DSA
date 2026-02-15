var isPowerOfTwo = function(n) {
    debugger;
    if(n === 1) return true;
    else if(n % 2 !==0 || n<1) return false;

    return isPowerOfTwo(n/2)
};
console.log(isPowerOfTwo(15));