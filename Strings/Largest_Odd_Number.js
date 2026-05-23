/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (s) {
    // let n = num.length-1
    // while(n>=0){
    //     if(Number(num[n]) % 2){
    //         return num.substring(0,n+1)
    //     }
    //     n--;
    // }
    // return "";
    // // TC: O(n)
    // // SC: O(1)

    //=====revision=====
    let n = s.length - 1;

    while (n >= 0) {
        if (Number(s[n]) % 2) {
            return s.substring(0, n + 1);
        }
        n--
    }
    return "";
    // TC:O(n);
    // SC:O(1);
};