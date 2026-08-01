// 1.global space; -> nodejs/browser/watch etcc.,
// 2. inside a function; depends on strict/non-strict mode; (this substiution)
// 3 undefined or null replaced to  global object only in non-strict StrictMode;
// 4. this keyword value depends on how the function is called;
// x();
// // window.x();
// 5. this insdie a object's method;
// 6. CALL, APPLY , BIND METHODS (SHARING METHODS);
// 7. this inside arrow function; (enclosing lexical context);
// 8. this inside nested arrow functions; or inside nested normal function (inside object)
// 9. this inside Dom that refers particular HTML ELEMENT;

const obj ={
    a:10,
    x:function (){
        console.log(this.a)
    }
}
obj.x();


const obj2 = {
    a:500,
}
obj.x.call(obj2)