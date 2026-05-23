/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

    //brute force
    // s=s.toLowerCase();
    // let filteredString = "";
    // for(let i=0;i<s.length;i++){
    //     if(s[i].match(/[a-z0-9]/)){
    //         filteredString = filteredString + s[i];
    //     }
    // }
    // let rev = filteredString.split("").reverse().join("");
    // if(rev === filteredString){
    //     return true;
    // }else{
    //     return false;
    // }

    // 1st approach
    // s = s.toLowerCase();
    // let filteredString = "";
    // let rev = ""
    // for (let i = 0; i < s.length; i++) {
    //     // if ((s[i].charCodeAt() >= "a".charCodeAt() && s[i].charCodeAt() <= "z".charCodeAt()) || (s[i].charCodeAt() >= "0".charCodeAt() && s[i].charCodeAt() <="9".charCodeAt())) {
    //     if (s[i].match(/[a-z0-9]/)) {
    //         filteredString = filteredString + s[i];
    //         rev = s[i] + rev;
    //     }
    // }
    // if (rev === filteredString) {
    //     return true;
    // } else {
    //     return false;
    // }

    // //clean code for first Approach;
    // s = s.toLowerCase();
    // let filteredString = "";
    // let rev = ""
    // for (let letter of s) {
    //     if (letter.match(/[a-z0-9]/)) {
    //         filteredString = filteredString + letter;
    //         rev = letter + rev;
    //     }
    // }
    // if (rev === filteredString) return true;
    // return false;

    // TC:O(n)
    // SC:O(n) //because of repeat the chars again nLength to rev and filteredString

    //=======revision=====
    // Brute Force Approach

    // s = s.toLowerCase();

    // let OriginalStr = ""
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i].match(/[0-9a-z]/)) {
    //         OriginalStr = OriginalStr + s[i];
    //     }
    // }
    // let rev = OriginalStr.split("").reverse().join("")
    // if (rev === OriginalStr) {
    //     return true;
    // }
    // return false;

    // optimal solution

    // s = s.toLowerCase();

    // let OriginalStr = ""
    // let rev = ""
    // for(let i=0;i<s.length;i++){
    //     if(s[i].match(/[0-9a-z]/)){
    //         OriginalStr = OriginalStr + s[i];
    //         rev = s[i] + rev
    //     }
    // }  

    // if(rev === OriginalStr){
    //     return true;
    // }
    // return false;

    // clean code approach
    s = s.toLowerCase();

    let OriginalStr = ""; rev = "";

    for (let letter of s) {
        if (letter.match(/[0-9a-z]/)) {
            OriginalStr += letter;
            rev = letter + rev
        }
    }
    return rev === OriginalStr

    //let's use two Pointers Approach
    // let left = 0;
    // let right = s.length - 1;
    // while (left < right) {
    //     if (s[left] === s[right]) {
    //         left++; right--
    //     }
    //     if (!s[left].match(/[0-9a-z]/)) {
    //         left++
    //     }
    //     if (!s[right].match(/[0-9a-z]/)) {
    //         right++
    //     }
    //     else {
    //         return false;
    //     }
    // }
    // return true;


    //revision===day10
    // s = s.toLowerCase();
    // let left = 0;
    // let right = s.length - 1;

    // while (left < right) {
    //     if (s[left] === s[right]) {
    //         left++
    //         right--
    //     }
    //     else if (!s[left].match(/[a-z0-9]/)) {
    //         left++;
    //     }
    //     else if (!s[right].match(/[a-z0-9]/)) {
    //         right--;
    //     }
    //     else {
    //         return false;
    //     }
    // }
    // return true;

    // clean code
    s=s.toLowerCase();
    let left = 0;
    let right = s.length - 1

    function isAlphaNumberic(ch){
        return (ch >= 'a' && ch <= 'z') || (ch >='0' && ch <='9');
    }

    while (left < right) {
        if (s[left] === s[right]) {
            left++
            right--
        }
        else if (!isAlphaNumberic(s[left])) {
            left++;
        }
        else if (!isAlphaNumberic(s[right])) {
            right--;
        }
        else {
            return false;
        }
    }
    return true;

};


