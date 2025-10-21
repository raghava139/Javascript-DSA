function toFindThePalindrome(num){
    let reverse = 0;
    let numCopy =num;
    while(num > 0){
        let remainderValue = num%10 // To find the last digit
        reverse = (10 * reverse) + remainderValue; //to get the one by one value inside Reverse
        num = Math.floor(num / 10) // to remove the last digit;
    }
   return reverse === numCopy;
}
let num = 2332;
let FindThePalindrome = toFindThePalindrome(num);
console.log('findthePalindrome',FindThePalindrome);