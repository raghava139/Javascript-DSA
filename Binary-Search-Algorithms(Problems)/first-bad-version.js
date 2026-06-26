/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    // return function (n) {
    //     let left = 1;
    //     let right = n;

    //     while (left < right) {
    //         let middle = left + Math.floor((right - left) / 2);
    //         let response = isBadVersion(middle)
    //         if (!response) {
    //             left = middle + 1
    //         } else {
    //             right = middle;
    //         }
    //     }
    //     return right;
    // };
    // TC: O(log n)
    // SC: O(n)


    //Day 2 revision
    // return function (n) {
    //     let left = 1;
    //     let right = n;

    //     while (left < right) {
    //         let middle = left + Math.floor((right - left) / 2);
    //         let badVersion = isBadVersion(middle);

    //         if (!badVersion) {
    //             left = middle + 1;
    //         } else {
    //             right = middle;
    //         }
    //     }
    //     return left;
    // };

    // TC: O(log n)
    // SC: O(1)

    // Day 10 revision
    return function (n) {

        let left = 1;
        let right = n;

        while (left < right) {
            let middle = left + Math.floor((right - left) / 2);
            let badVersion = isBadVersion(middle);
            if (badVersion) {
                right = middle;
            } else {
                left = middle + 1;
            }
        }
        return left
    }
};