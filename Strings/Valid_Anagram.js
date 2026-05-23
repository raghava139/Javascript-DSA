/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    //brute force apporach + inbuilt functions
    //if (s.length !== t.length) return false;
    // s= s.split("").sort().join("")
    // t = t.split("").sort().join("")
    // console.log(s)
    // if(s === t) return true;
    // return false
    // TC: O(n) + O(nlogn) + O(n) + same again => O(n logn);
    // SC: O(n) + O(n) + O(n) => O(n)

    //second Approach with 3 loops
    // let Map1 = {}
    // let Map2 = {}
    // for (let i = 0; i < s.length; i++) {
    //     if (Map1[s[i]]) {
    //         Map1[s[i]]++
    //     } else {
    //         Map1[s[i]] = 1
    //     }
    // }

    // for (let j = 0; j < t.length; j++;) {
    //     if (Map2[t[j]]) {
    //         Map2[t[j]]++
    //     } else {
    //         Map2[t[j]] = 1
    //     }
    // }
    // for (let char in Map2) {
    //     if (Map1[char] !== Map2[char]) {
    //         return false;
    //     }
    // }
    // return true;

    // // TC: O(n) + O(n) + O(n)  = O(n);
    // // SC:  O(1) because of lowercase English letters. 26 chars.

    // //3rd approach using two loops
    // let map = {};
    // for( let i=0;i<s.length;i++){
    //     if(!map[s[i]]){
    //         map[s[i]] = 1;
    //     }else {
    //         map[s[i]]++
    //     }
    // }

    // for(let j = 0;j<t.length ;j++){
    //     // if(!map[t[j]] || map[t[j]] < 0){ /// this is also correct;
    //     if(!map[t[j]]){ // !0 => true finally it returns false;
    //         return false;
    //     }
    //     map[t[j]]--;
    // }

    // return true;
    // TC: O(n) + O(n)  = O(n);
    // SC:  O(1) because of lowercase English letters. 26 chars.


    //DAY 2 REVISION=====
    if (s.length !== t.length) return false;
    //brute force Approach
    // let firstStr = s.split("").sort().join("");
    // let secondStr = t.split("").sort().join("");

    // return firstStr === secondStr;

    // TC: O(n) + O(n logn) + O(n) = O(n logn)// always wins bigger;
    // SC: O(n) + O(n) + O(n) => O(3n) =>O(n)


    //second approach
    // if(s.length !== t.length) return false;
    // let mapOfS = {};
    // let mapOft = {};
    // for (let i = 0; i < s.length; i++) {
    //     if (mapOfS[s[i]]) {
    //         mapOfS[s[i]]++
    //     } else {
    //         mapOfS[s[i]] = 1
    //     }
    // }
    // for (let i = 0; i < t.length; i++) {
    //     if (mapOft[t[i]]) {
    //         mapOft[t[i]]++
    //     } else {
    //         mapOft[t[i]] = 1
    //     }
    // }
    // for (let x = 0; x < s.length; x++) {
    //     if (mapOfS[s[x]] !== mapOft[s[x]]) return false;
    // }
    // return true;
    // TC: O(n) + O(n) + O(n) => O(n);
    // SC: O(1) + O(1) => O(1) // s and t consist of lowercase English letters.


    //3rd approach;
    if(s.length !== t.length) return false;
    let map = {};

    for(let i=0;i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]] = 1;
        }else{
            map[s[i]]++;
        }
    }

    for(let i=0; i<t.length;i++){
        if(!map[t[i]] || map[t[i]] < 0) return false;
          map[t[i]]--
    }
    return true;

    //TC: O(n) + O(n) => O(n)
    //SC: O(1) // s and t consist of lowercase English letters.
};