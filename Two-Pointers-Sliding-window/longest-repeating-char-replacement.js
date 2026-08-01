/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {

    // Day 10 ======revision======
    let i = 0;
    let j = 0;

    let map ={};
    let maxWs = 0;

    while(j<s.length){

        if(windowSizeValid(map)){
            maxWs = Math.max(maxWs,(j-i)+1);
            j++;
            map[s[j]] = ++map[s[j]];
        }else{
            map[s[i]] = --map[s[i]];
            i--;
        }
        return maxWs;
    }
    let total = 0;
    let max = 0;
    function windowSizeValid(map,k){
        for(let i=0;i<26;i++){
            let char = String.fromCharCode(i);
            if(map[char]){
                total = total+map[char];
                max = Math.max(max,map[char])
            }
        }
        return (total-max)<=k
    }
};