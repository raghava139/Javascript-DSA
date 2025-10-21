
function countDigit(num){

    let count = 0;
    // corner case 1
   if(typeof num !== 'number'){
    console.log(`your input is a not a number. It's taking as a ${typeof num}`);
    return `your input is a not a number. It takes a ${typeof num}`; 
   }
   // corner case 2;
   // if num is zero then return 1;
    if(num==0){
       return 1
    }
    //corner case 2 
    //if num is negative
    num= Math.abs(num);
    while(num > 0){
        num = Math.floor(num/10);
        count++;
    }
    console.log('count',count)
    return count;

}

let num=38337;
countDigit(num);

//total three corner cases;
// 1. if num is different data-typeof;
// 2. if num value is Zero;
// 3. if num values is negative;