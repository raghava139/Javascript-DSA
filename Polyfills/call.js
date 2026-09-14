
let globalThis = this;
Function.prototype.myCall = function (obj, ...args) {
    if (obj == null) {
        obj = globalThis;
    }
    
    let sym = Symbol();
    obj[sym] = this;

    // temporary call Object.method()
    let res = obj[sym](...args);

    // then delete the symbol():method();
    delete obj[sym];

    return res;
}
