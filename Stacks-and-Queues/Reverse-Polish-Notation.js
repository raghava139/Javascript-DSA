/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (arr) {
    // let stack = []
    // for (let i = 0; i < tokens.length; i++) {
    //     if (tokens[i] === '+' || tokens[i] === '-' || tokens[i] === '/' || tokens[i] === "*") {
    //         let a = stack.pop();
    //         let b = stack.pop();
    //         let c = eval(`${b} ${tokens[i]} ${a}`)
    //         stack.push(Math.trunc(c))
    //     } else {
    //         stack.push(Number(tokens[i]))
    //     }
    // }
    // console.log(stack[stack.length-1])
    // return  stack.pop();

    // // differnet approach;(but concept is same)
    //  let map = {
    //     "+": (a,b)=>(b+a),
    //     "-": (a,b)=> (b-a),
    //     '/': (a,b)=> (Math.trunc(b/a)),
    //     '*': (a,b)=> (b*a)
    // }
    // let stack = []
    // for (let i = 0; i < tokens.length; i++) {
    //     if (map[tokens[i]]) {
    //         let a = stack.pop();
    //         let b = stack.pop();
    //         let ans = map[tokens[i]](a,b)
    //         stack.push(ans)
    //     } else {
    //         stack.push(Number(tokens[i]))
    //     }
    // }
    // console.log(stack[stack.length-1])
    // return  Number(stack.pop());

    // TC:O(n)
    // where n = tokens.length
    // SC:O(n)
    // In the worst case (all numbers before operators), the stack can hold up to N elements.

    // day 2 revision
    // let stack = [];

    // for (let i = 0; i < tokens.length; i++) {
    //     if (tokens[i] === '/' || tokens[i] === '+' || tokens[i] === '-' || tokens[i] === '*') {
    //         let a = stack.pop();
    //         let b = stack.pop();
    //         let ans = eval(`${b}${tokens[i]}${a}`);
    //         stack.push(Math.trunc(ans));
    //     } else {
    //         stack.push(Number(tokens[i]));
    //     }
    // }
    // return stack.pop();

    //cleaner version of code;
    // let stack = [];

    // let map = {
    //     "+": (a, b) => (b + a),
    //     "-": (a, b) => (b - a),
    //     "/": (a, b) => (Math.trunc(b / a)),
    //     "*": (a, b) => (b * a)
    // }

    // for (let i = 0; i < tokens.length; i++) {
    //     if (map[tokens[i]]) {
    //         let a = stack.pop();
    //         let b = stack.pop();
    //         stack.push(map[tokens[i]](a, b));
    //     } else {
    //         stack.push(Number(tokens[i]))
    //     }
    // }
    // return stack.pop();
    // TC: O(n) //tokens length;
    // SC: O(n) //store in stack O(n)  and map is O(1)

    // day 10 revision
    // let stack = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] !== "/" && arr[i] !== "-" && arr[i] !== "*" && arr[i] !== "+") {

    //         stack.push(Number(arr[i]));
    //     } else {
    //         let a = stack.pop();
    //         let b = stack.pop();
    //         let ans = eval(`${b} ${arr[i]} ${a}`);
    //         stack.push(Math.trunc(ans));
    //     }
    // }
    // return stack[stack.length - 1]
    // cleaner code
    // let map = {
    //     "+": (a, b) => b + a,
    //     "-": (a, b) => b - a,
    //     "/": (a, b) => b / a,
    //     "*": (a, b) => b * a
    // }

    // let stack = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (map[arr[i]]) {
    //         let a = stack.pop();
    //         let b = stack.pop();
    //         let ans = map[arr[i]](a, b);
    //         stack.push(Math.trunc(ans));
    //     } else {
    //         stack.push(Number(arr[i]));
    //     }
    // }
    // return stack[stack.length - 1]
    // // TC: O(n);
    // // SC: O(n)

    let stack = [];
    let map = {
        "+": (a, b) => b + a,
        "-": (a, b) => b - a,
        "/": (a, b) => b / a,
        "*": (a, b) => b * a
    }

    for (let char of arr) {
        if (map[char]) {
            let a = stack.pop();
            let b = stack.pop();
            let ans = map[char](a, b)
            stack.push(Math.trunc(ans))
        } else {
            stack.push(Number(char))
        }
    }

    return stack[stack.length - 1]

    // TC: O(n)
    // SC: O(n)
};