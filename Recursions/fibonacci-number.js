// 1st approach 
//Iterative Approach top-bottom
// var fib = function(n) {
//     let prev = 0;
//     let current = 1;

//     for(let i=0 ;i<n; i++){
//         current = prev + current;
//         prev = current - prev
//     }
//     return prev
// };

// 2nd approach
// recursion apporach bottom-top
var fib = function(n) {
    // debugger;
    console.log(`fib ( ${n} )`)
   if(n<=1) return n;
   return fib(n-1) + fib(n-2);
};

fib(5)