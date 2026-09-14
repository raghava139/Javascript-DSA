Array.prototype.myMap = function (callback) {
    // Store transformed values in a new array
    const result = [];

    // Iterate over each element of the current array (this)
    for (let i = 0; i < this.length; i++) {

        // Execute callback and store its returned value
        result.push(callback(this[i], i, this));
    }

    // Return the new transformed array
    return result;
};