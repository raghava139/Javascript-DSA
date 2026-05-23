/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {

    //1st - apporach
    // let arr = [];

    // for (let i = 0; i < words.length; i++) {
    //     let subWord = words[i]
    //     // for(let j=0; j<subWord.length; j++){
    //     //     if(subWord[j]?.toLowerCase() === x?.toLowerCase()){
    //     //         arr.push(i);
    //     //         break;
    //     //     }
    //     // }
    //     if (subWord.includes(x)) {
    //         arr.push(i);
    //     }
    // }
    // return arr;
    // //TC:O(n x m),
    // //SC:O(1)
    // // n = number of words
    // // m = maximum length of each word


    // ----------revision------------

    // let res = [];
    // for(let i=0;i<words.length;i++){
    //     if(words[i].includes(x)){
    //         res.push(i);
    //     }
    // }
    // return res;

    let res = [];
    for(let i=0; i<words.length; i++){
        for(let j=0;j<words[i].length;j++){
            if(words[i][j] ===x){
                res.push(i);
                break;
            }
        }
    }
    return res;
    //TC:O(n x m),
    //SC:O(1)
    //n = number of words
    //m = maximum length of each word
};