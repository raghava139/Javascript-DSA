Array.prototype.myFilter = function (callback) {
    // Store elements that satisfy the condition
    const result = [];

    // Iterate over each element of the current array (this)
    for (let i = 0; i < this.length; i++) {

        // If callback returns true, keep the original element
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }

    // Return the new filtered array
    return result;
};