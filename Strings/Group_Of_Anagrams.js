/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    //first approach
    // let map = {};
    // for(let i=0;i<strs.length;i++){
    //     let sortedStr = strs[i].split("").sort().join("");
    //     if(!map[sortedStr]){
    //         map[sortedStr] = [strs[i]];
    //     }else{
    //         map[sortedStr].push(strs[i])
    //     }
    // }
    // return Object.values(map);
    // // n = number of characters
    // // m = each string of char
    // // TC: O(n) X ( O(m) + O(m logm) + O(m) ) => O(m x m logm);
    // // SC: O(n) X O(m)// O(m) because of aet O(n) :['eat'] O(m)

    // second approach without using sorting 
    // let map = {};
    // for (let i = 0; i < strs.length; i++) { // O(n)

    //     //creating a key structure like A1B2C3...etc..,
    //     // step1 : creating empty index array upto 26
    //     let frequency = Array(26).fill(0);
    //     let s = strs[i];
    //     // step 2:fill with index 101-97= 4th index filling.etc..,
    //     for (let j = 0; j < s.length; j++) { // O(m)
    //         let index = s[j].charCodeAt() - 'a'.charCodeAt();
    //         frequency[index]++;
    //     }
    //     //step 3:ceate structure A1B2C3..etc.,
    //     let key = "";
    //     for (let k = 0; k < 26; k++) { // O(1)
    //         key = key + String.fromCharCode(k + 'a'.charCodeAt()) + frequency[k]
    //     }   

    //     console.log(key)

    //     //now comes to real picture;
    //     if (!map[key]) {
    //         map[key] = [strs[i]];
    //     }
    //     else {
    //         map[key].push(strs[i])
    //     }
    // }
    // return Object.values(map)
    // TC: O(n X m) // we reduced the length sorting to unique Key...
    // SC: O(n X m)

    //======= DAY 2 revision =======
    let map = {};
    for (let i = 0; i < strs.length; i++) {
        let sortedKey = strs[i].split("").sort().join("");

        if (!map[sortedKey]) {
            map[sortedKey] = [strs[i]];
        }
        else {
            map[sortedKey].push(strs[i]);
        }
    }

    return Object.values(map);

    // TC: O(n x m logm);
    // SC: O(n x m)
    // N = number of strings
    // M = average length of each string
};
