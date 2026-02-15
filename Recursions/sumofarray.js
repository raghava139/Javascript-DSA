function sumofarray(n){
    if(n===0) return arr[n]; //arr[0]

    if(arr[n]  % 2 !== 0){
       return arr[n] + sumofarray(n-1);
    }else{
       return sumofarray(n-1);
    }
}

let arr = [5,3,2,0,1];
sumofarray(arr.length-1);