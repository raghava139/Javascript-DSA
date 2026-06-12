/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {

    // day 2 // revision with out stack
    // let level = -1;
    // let ans = "";

    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] === "(") {
    //         level++;
    //         if (level > 0) {
    //             ans = ans + s[i];
    //         }
    //     } else {
    //         if (level > 0) {
    //             ans = ans + s[i];
    //         }
    //         level--;
    //     }
    // }
    // return ans;

    // // write some clean coder
    // let level = -1, ans="";

    // for (let char of s) {
    //     if (char === "(") {
    //         level++;
    //         ans += (level > 0) ? char : ""
    //     } else {
    //         ans += (level > 0) ? char : "";
    //         level--;
    //     }
    // }
    // return ans;

    // TC: O(n)
    // SC: O(n)

    //day 10 revision
    // let stack = []
    // let ans = "";

    // for(let i=0;i<s.length; i++){
    //     if(s[i] === "("){
    //         stack.push(s[i]);
    //         if(stack.length > 1){
    //             ans += s[i];
    //         }
    //     }else{
    //         if(stack.length > 1){
    //             ans += s[i];
    //         }
    //         stack.pop();
    //     }
    // }
    // return ans;

    //clean coded
    // let stack = []
    // let ans = "";

    // for(let char of s){
    //     if(char === "("){
    //         stack.push(char);
    //         ans += (stack.length > 1) ? char: ""
    //     }else{
    //         ans += (stack.length > 1) ? char: ""
    //         stack.pop();
    //     }
    // }
    // return ans;

    // day 10 revision without stack;
    // let level = -1;
    // let ans = "";

    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] === "(") {
    //         level++;
    //         ans += level > 0 ? s[i] : "";
    //     } else {
    //         ans += level > 0 ? s[i] : "";
    //         level--
    //     }
    // }
    // return ans;

    // clean code without stack day 10 revision
    let level = -1, ans = "";
    for (let char of s) {
        if (char === "(") {
            level++;
            ans += level > 0 ? char : "";
        } else {
            ans += level > 0 ? char : "";
            level--
        }
    }
    return ans;
};