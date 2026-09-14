Function.prototype.myBind = function (obj, ...args1) {
    // Original function (this = function on which myBind() is called)
    const originalFn = this;

    // Return a wrapper function
    return function (...args2) {
        // Call original function with bound 'this'
        // and merge pre-filled + runtime arguments
        return originalFn.apply(obj, [...args1, ...args2]);
        // (or)
        // return originalFn.call(thisArg, ...args1,...args2)
    };
};