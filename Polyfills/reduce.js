Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator;
    let startIndex = 0;

    // Empty array without initialValue throws an error
    if (this.length === 0 && arguments.length < 2) {
        throw new TypeError(
            "Reduce of empty array with no initial value"
        );
    }

    // If initialValue is provided, use it as the accumulator
    if (arguments.length > 1) {
        accumulator = initialValue;
    } else {
        // Otherwise, use the first element as the accumulator
        accumulator = this[0];
        startIndex = 1;
    }

    // Accumulate the result for each element
    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator,this[i],i,this);
    }

    // Return the final accumulated value
    return accumulator;
};