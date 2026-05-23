/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {

    // let mapStoT = {};
    // let mapTtoS = {};

    // for(let i=0;i<s.length;i++){
    //     if(!mapStoT[s[i]] && !mapTtoS[t[i]]){
    //         mapStoT[s[i]] = t[i];
    //         mapTtoS[t[i]] = s[i];
    //     }else if(mapStoT[s[i]] !== t[i]){
    //         return false;
    //     }else if(mapTtoS[t[i]] !== s[i]){
    //         return false;
    //     }
    // }
    // return true;

    // TC: O(n)
    // SC: O(n) //general case
    // SC: O(1) // fast look up  as per constraints

    // day 2 revision

    let mapStoT = {};
    let mapTtoS = {};
    for (let i = 0; i < s.length; i++) {
        if (!mapStoT[s[i]] && !mapTtoS[t[i]]) {
            mapStoT[s[i]] = t[i];
            mapTtoS[t[i]] = s[i];
        } else if (mapStoT[s[i]] !== t[i] || mapTtoS[t[i]] !== s[i]) {
            return false;
        }
    }
    return true;
    // TC: O(n);
    // SC: O(n);//general case but as per constraints O(1)
};