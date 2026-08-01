/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    //     let i = 0;
    //     let j = 0;
    //     while (j < t.length) {
    //         if (s[i] === t[j]) {
    //             i++;
    //         }
    //         j++
    //     }
    //     return i === s.length
    // };

    // TC:O(n)
    // SC:O(1)

    // let i = 0;
    // let j = 0;

    // while (j < t.length) {
    //     if (s[i] === t[j]) {
    //         i++
    //     };
    //     j++
    // }
    // return i === s.length;


    //==========Day 10 revision==========
    let i = 0;
    let j = 0;

    while (i < t.length) {
        if (t[i] === s[j]) {
            i++; j++
        }
        i++;
    }
    return j === s.length
    // TC: O(n)
    // SC: O(1)
}
