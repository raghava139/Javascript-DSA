/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    //first approach
    // let balancedCount = 0;
    // let leftCount = 0;
    // let rightCount = 0;
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] === "L") {
    //         leftCount++;
    //     } else {
    //         rightCount++;
    //     }
    //     if (leftCount === rightCount) {
    //         balancedCount++
    //     }
    // }
    // return balancedCount;

    // 2nd approach using temp Instead of two variables (this is known as balance approach)
    let balancedCount = 0;
    let temp = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "L") {
            temp++;
        } else {
            temp--;
        }
        if (temp === 0) {
            balancedCount++
        }
    }
    return balancedCount;
};