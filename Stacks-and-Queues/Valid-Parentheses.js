/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    // let stack = [];

    // let map = {
    //     "{": "}",
    //     "[": "]",
    //     "(": ")"
    // }

    // for (let i = 0; i < s.length; i++) {
    //     // if (s[i] === '[' || s[i] === '{' || s[i] === '(') {
    //     if (map[s[i]]) {
    //         stack.push(s[i]);
    //     }
    //     else {
    //         let top = stack.pop();
    //         // if (!top || ((top === '[' && s[i] !== ']') || (top === '{' && s[i] !== '}') || (top == '(' && s[i] !== ')'))) {
    //         if (!top || map[top] !== s[i]) {
    //             return false;
    //         }
    //     }
    // }

    // return stack.length === 0;
    // TC: O(n) // because input grows (n)
    // SC: O(n) //because of stack


    //  day 2 revision
    // let stack = [];
    // for(let i=0; i<s.length; i++){
    //     if(s[i] === '[' || s[i] === '{' || s[i] === '(' ){
    //         stack.push(s[i]);
    //     }else{
    //         let top = stack.pop();
    //         if(!top || (top === '[' && s[i] !== ']') || (top === '{' && s[i] !== '}') || (top === '(' && s[i] !== ')')){
    //             return false;
    //         }
    //     }
    // }
    // return stack.length === 0;


    // // cleaner code 
    // let stack = [];
    // let map = {
    //     "{" : "}",
    //     "[" : "]",
    //     "(" : ")"
    // }
    // for (let i = 0; i < s.length; i++) {
    //     if (map[s[i]]) {
    //         stack.push(s[i]);
    //     } else {
    //         let top = stack.pop();
    //         console.log(map[top] , s[i])
    //         if (!top || map[top] !== s[i]) {
    //             return false;
    //         }
    //     }
    // }
    // return stack.length === 0;
    // TC: O(n)
    // SC: O(n)

    // day 10 revision====
    // let stack = [];
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
    //         stack.push(s[i]);
    //     }
    //     else {
    //         let top = stack.pop();
    //         if (!top || (top === "{" && s[i] !== "}") || (top === "(" && s[i] !== ")") || (top === "[" && s[i] !== "]")) {
    //             return false;
    //         }
    //     }
    // }
    // return stack.length === 0;

    //clean the code of day 10 revision
    let map = {
        "{": "}",
        "(": ")",
        "[": "]"
    }
     let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(s[i]);
        }
        else {
            let top = stack.pop();
            // if (!top || (top === "{" && s[i] !== "}") || (top === "(" && s[i] !== ")") || (top === "[" && s[i] !== "]")) {
            if(!top || map[top] !== s[i]){
                return false;
            }
        }
    }
    return stack.length === 0;
};