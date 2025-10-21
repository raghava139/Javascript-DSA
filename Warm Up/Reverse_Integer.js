// Given a signed 32 - bit integer x,
// return x with its digits reversed.
// If reversing x causes the value to go outside the signed 
// 32 - bit integer range[-2 powerof 31, 2 powerof 31 - 1], then return 0.

// Constraints:
// -2 Powerof 31 <= x <= 2 Powerof 31 - 1

function ReverseInteger(num) {
    let NumCopy = num;

    num = Math.abs(num);
    let reverse = 0;
    while (num > 0) {
        let lastDigit = num % 10;
        reverse = (10 * reverse) + lastDigit;
        num = Math.floor(num / 10);
    }
    let Limit = Math.pow(2,31);
    console.log(Limit)

    //Limit should be in this range: -2 Powerof 31 <= x <= 2 Powerof 31 - 1
    if(reverse < -Limit || reverse > Limit-1){
        return 0;
    }
    
    return NumCopy < 0 ? -reverse : reverse;
}
let num = 23461
///output
// 1264 => 4621;
// -124 => -421;
let reverseDValue = ReverseInteger(num);
console.log('reversdedValue', reverseDValue)