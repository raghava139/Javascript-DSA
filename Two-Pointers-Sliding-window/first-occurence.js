/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

    //sliding window + brute force approach
    // let n = haystack.length;
    // let m = needle.length;
    //         console.log(n-m)
    // for (let i = 0; i <= n - m; i++) {
    //     let j = 0;
    //     for (j = 0; j < m; j++) {
    //         if (haystack[i + j] !== needle[j]) {
    //             break;
    //         }
    //     }
    //     if (j === m) {
    //         return i;
    //     }
    // }
    // return -1;


    //KMP(Knuth Morris Pratt) algorithm.
    // let n = haystack.length;
    // let m = needle.length;
    // we build the LPS => which is known as Longest Prefix Suffix
    // let i = 0;
    // let j = 1;
    // let lps = [0];

    // while (j < m) {
    //     if (needle[i] === needle[j]) {
    //         lps[j] = i + 1;
    //         i++;
    //         j++;
    //     } else {
    //         if (i === 0) {
    //             lps[j] = 0;
    //             j++
    //         } else {
    //             i = lps[i - 1]
    //         }
    //     }
    // }


    // //search using KMP
    // i = 0;
    // j = 0;
    // while (i < n) {
    //     if (haystack[i] === needle[j]) {
    //         i++;
    //         j++;
    //     } else {
    //         if (j === 0) {
    //             i++;
    //         } else {
    //             j = lps[j - 1];
    //         }
    //     }

    //     if (j === m) {
    //         return i - m;
    //     }
    // }
    // return -1
    // TC:O(m+n)
    // SC:O(m)// because of LPS Array;

    // ====== Day 2 === revision ====
    // let n = haystack.length;
    // let m = needle.length;

    // for (let i = 0; i <= n - m; i++) {
    //     let j = 0;
    //     for (j = 0; j < m; j++) {
    //         if (haystack[i+j] !== needle[j]) {
    //             break;
    //         }
    //     }
    //     if (m === j) return i;
    // }
    // return -1;
    // TC: O(n x m)
    // SC: O(1)

    // Day 10 ====revision====
    //sliding window + brute force approach
    // let n = haystack.length;
    // let m = needle.length;
    // for (let i = 0; i <= n - m; i++) {
    //     let j = 0;
    //     while (j < m) {
    //         if (haystack[i + j] !== needle[j]) {
    //             break;
    //         }
    //         j++;
    //     }
    //     if (j === m) return i;
    // }
    // return -1;
    // TC: O(n x m);
    // SC: O(1)


    // Day 10====revision=====
    //     let n = haystack.length;
    //     let m = needle.length;

    //     let i = 0;
    //     let j = 1;
    //     let lps = [0];


    //     // find the LPS (longest Prefix suffix)
    //     while (j < m) {
    //         if (needle[i] === needle[j]) {
    //             lps[j] = i + 1;
    //             i++;
    //             j++;
    //         } else {
    //             if (i === 0) {
    //                 lps[j] = 0;
    //                 j++;
    //             } else {
    //                i = lps[i - 1]
    //             }
    //         }
    //    }
    //     i = 0;
    //     j = 0;
    //     console.log(lps)

    //     // //search the index of firstoccuracne 
    //     while (i < n) {
    //         if (needle[j] === haystack[i]) {
    //             i++;
    //             j++;
    //         } else {
    //             if (j == 0) {
    //                 i++;
    //             } else {
    //                 j = lps[j - 1]
    //             }

    //         }

    //         // console.log(j)
    //         console.log(i-m)
    //         if (j === m) return i - m
    //     }

    //     return -1

    // Day 10 revision=================
    let i = 0;
    let j = 1;
    let lps = [0];

    // find the LPS
    while (j < needle.length) {
        if (needle[j] === needle[i]) {
            lps[j] = i + 1;
            i++;
            j++;
        } else {
            if (i == 0) {
                lps[j] = 0;
                j++;
            } else {
                i = lps[i - 1]
            }
        }
    }


    //search the index by using LPS and KMP;
    i = 0;
    j = 0;
    while (i < haystack.length) {
        if (needle[j] === haystack[i]) {
            i++;
            j++;
        } else {
            if (j === 0) {
                i++
            } else {
                j = lps[j - 1]
            }
        }
        if (j === needle.length) return i - needle.length;
    }

    return -1;

    // TC: O(m + n)
    // SC: O(m)

};