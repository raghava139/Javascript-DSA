function printSum(x){
    if(x === 0) return 0;
     return x + printSum(x-1);
}
console.log(printSum(5))
