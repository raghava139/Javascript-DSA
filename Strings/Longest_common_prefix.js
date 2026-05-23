/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (s) {

    // let x = 0;
    // let firstStr = s[0];

    // while( x < firstStr.length){
    //     for(let i=1;i<s.length;i++){
    //         if(s[i][x] !== firstStr[x] || s[i] === x){
    //             return s[0].substring(0,x);
    //         }
    //     }
    //     x++;
    // }
    // return s[0]

    // TC: O(s)

    //revision => day2
    let x = 0;
    let firstStr = s[0];
    while (x < firstStr.length) {
        for (let i = 1; i < s.length; i++) {
            if (s[i][x] !== firstStr[x]) {
                return s[0].substring(0, x);
            }
        }
        x++;
    }
    return s[0];
    // TC: O(s) // as per constraints;
    // TC: O(n x m) // as general case
    // SC: O(1)
};