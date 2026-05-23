/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {

    // //brute force approach;
    // let arrOfChars = s?.trim()?.split(" ");
    // let lastWordLength = arrOfChars[arrOfChars.length-1]?.length
    // return lastWordLength;

    //My Approach;
    // let count = 0;
    // for(let i=s.length-1 ; i>=0 ;i--){
    //     if(s[i] !== " "){
    //         count++
    //     }else if(count > 0 && s[i] === " "){
    //         break;
    //     }
    // }
    // return count;

    // optimal with two Loops
    // //trim the spaces
    // let n = s.length-1;
    // while(n>=0){
    //     if(s[n] === " "){
    //         n--
    //     }
    //     else{
    //         break;
    //     }
    // }

    // //start with last word + add the count
    // let count = 0;
    // while(n>=0){
    //     if(s[n] !== " "){
    //         n--;
    //         count++;
    //     }else{
    //         break;
    //     }
    // }

    //optimal with two Loops + code cleaner 
    // let n = s.length - 1;
    // while (n >= 0) {
    //     if (s[n] !== " ") break;
    //     n--
    // }

    // //start with last word + add the count
    // let count = 0;
    // while (n >= 0) {
    //     if (s[n] == " ") break;
    //     n--; count++
    // }

    // //now, return the last word count;
    // return count


    // //optimal with one Loop;
    // let n = s.length - 1;
    // let count = 0;
    // while (n >= 0) {
    //     if (s[n] !== " ") {
    //         count++;
    //     } else if (count > 0) {
    //         break;
    //     }
    //     n--;
    // }

    // return count
    
    //------ Revision Factor ----------------

    // //using inbuilt functions;
    // let n = s.trim().split(" ");
    // return n[n.length-1].length

    //using two for loop;
    // // finding the last char
    // let n = s.length - 1;

    // // moving n upto letter reaches
    // while (n >= 0 && s[n] === " ") {
    //     n--
    // }

    // // start count with last word until space reaches
    // let count = 0;
    // while (n >= 0 && s[n] !== " ") {
    //     count++;
    //     n--;
    // }

    // // finally return the count
    // return count;


    // using one for loop
    //startwith with ending
    // let n = s.length-1;

    // let count = 0;
    // while(n>=0){

    //     //if letter is there update the count (non-space)
    //     if(s[n] !== " "){
    //         count++
    //     }

    //     // if it is space + count is already increased then automatically break the loop
    //     else if(count > 0){
    //         break;
    //     }

    //     // other wise always move the n
    //     n--;
    // }
    // return count;


};