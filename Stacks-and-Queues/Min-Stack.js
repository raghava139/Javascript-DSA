
var MinStack = function () {
    this.stack = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function (value) {
    if (this.stack.length === 0) {
        this.stack.push([value, value])
    } else {
        let minStackValue = this.stack[this.stack.length - 1][1]
        // if (value < minStackValue) {
        //     this.stack.push([value,value])
        // }else{
        //     this.stack.push([value,minStackValue])
        // }
        this.stack.push([value, value < minStackValue ? value : minStackValue])
    }

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    // let min = this.top();
    // for (let i = 0; i < this.stack.length; i++) {
    //     if (this.stack[i] < min) {
    //         min = this.stack[i];
    //     }
    // }
    // return min

    return this.stack[this.stack.length - 1][1]
};


/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// push: O(1) time
// pop: O(1) time
// top: O(1) time
// getMin: O(1) time
// Total space of MinStack: O(n) ✅