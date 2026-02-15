function printnto1(n){
    if(n===0) return;
    console.log(n)
    n= n-1;
    return printnto1(n);
}
console.log(printnto1(5))