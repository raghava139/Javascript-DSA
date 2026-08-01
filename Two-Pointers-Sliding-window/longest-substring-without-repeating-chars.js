/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    // day 10 ===revision====
  let i = 0;
  let j = 0;
  let map = {};
  let maxWs = 0;

    while(j<s.length){
        // if element is in map & also need to check is this inside window
        if(map[s[j]] !== undefined && map[s[j]] >= i){
            i = map[s[j]] + 1;
        }
        maxWs = Math.max(maxWs,(j-i)+1);
        map[s[j]] = j;
        j++
    }
    return maxWs;
};