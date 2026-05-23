/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    //     s = s.split("");
    //     for (let i = 0; i < s.length; i = i + (2 * k)) {
    //         let n = k;
    //         let mid = Math.floor(n / 2);
    //         for (let j = 0; j < mid; j++) {
    //             let temp = s[i + j];
    //             s[i+j] = s[i+n-j-1];
    //             s[i+n-j-1] = temp;
    //         }
    //     }
    //     return s.join("");
    // };
    // TC: O(n)
    // SC: O(n) => because of split("");
    // if string are mutable then O(1)

    // =============revision====
    // s = s.split("");
    // for (let i = 0; i < s.length; i = i + (2 * k)) {
    //     let n = k;
    //     let mid = Math.floor(n / 2);
    //     for (let j = 0; j < mid; j++) {
    //         let temp = s[i+j];
    //         s[i+j] = s[i+ n - j - 1]
    //         s[i+ n - j - 1] = temp;
    //     }
    // }
    // return s.join("")

    //Day 10 revision ===>
    s = s.split("");

    for (let i = 0; i < s.length; i = i + (2 * k)) {
        let n = k;
        let mid = Math.floor(n / 2);

        for (let j = 0; j < mid; j++) {
            let temp = s[i + j];
            s[i + j] = s[i + (n - j - 1)];
            s[i + (n - j - 1)] = temp;
        }
    }
    return s.join("");
    // TC: O(n)
    // SC: O(n)
}