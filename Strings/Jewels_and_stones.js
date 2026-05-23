/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {

    // brute force approach
    // let count = 0;
    // for (let i = 0; i < stones.length; i++) {
    //     // if (jewels.includes(stones[i])) {
    //     //     count++
    //     // }

    //     for (let j = 0; j < jewels.length; j++) {
    //         if (jewels[j] === stones[i]) {
    //             count++;
    //             break;
    //         }
    //     }
    // }
    // return count;

    // //Optimal solution;
    // let Jset = new Set();

    // // store in set all jewels (unique)
    // for (let i = 0; i < jewels.length; i++) {
    //     Jset.add(jewels[i]);
    // }

    // //find out the element is there. if there's increase the count;
    // let count = 0;
    // for (let j = 0; j < stones.length; j++) {
    //     if (Jset.has(stones[j])) {
    //         count++;
    //     }
    // }

    // // and finally return the count;
    // return count;

    // //optimal + cleaner code
    // let Jset = new Set(jewels);

    // //find out the element is there. if there's increase the count;
    // let count = 0;
    // for (let stone of stones) {
    //     if (Jset.has(stone)) count++;
    // }

    // // and finally return the count;
    // return count;

    // let count = 0;
    // for (let i = 0; i < stones.length; i++) {
    //     for (let j = 0; j < jewels.length; j++) {
    //         if (jewels[j] === stones[i]) {
    //             count++
    //             break;
    //         }
    //     }
    // }

    // return count;


    let set = new Set();  //SC: O(52) means O(1)

    for (let i = 0; i < jewels.length; i++) { //TC: O(n)
        set.add(jewels[i]);
    }

    let count = 0;
    for (let j = 0; j < stones.length; j++) {  //TC: O(n)
        if (set.has(stones[j])) count++ //TC:O(1)
    }

    return count;

    // TC:O(n) + O(n) = O(2n) => O(n)
    // SC:O(1)


};