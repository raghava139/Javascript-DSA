
let globalThis = this;
Function.prototype.myApply = function (obj, args) {

    //object handling; both null and undefined because == not ===
    if(obj == null){
        obj = globalThis;
    }
    
    // handling the primitives 
    obj = Object(obj);

    if(args == null){ // both null and undefined because == not ===
        args = [];
    }
    
    //handle the Array Arguments;
    if(!Array.isArray(args)){
        throw new TypeError('second Argument is must be an array')
    }

    let sym = Symbol();
    obj[sym] = this;
    let res = obj[sym](...args);
    delete obj[sym]
    return res;
}
