/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {

    // Day 5 ===revision====
    let s1Arr = Array(26).fill(0);
    let s2Arr = Array(26).fill(0);

    // s1 and s2 filling the numbers initially
    let StandardArr = s1.length < s2.length ? s1.length : s2.length;
    for(let i = 0; i<StandardArr; i++){
        s1Arr[s1.charCodeAt(i)-97] = s1Arr[s1.charCodeAt(i)-97] + 1;
        s2Arr[s2.charCodeAt(i)-97] = s2Arr[s2.charCodeAt(i)-97] + 1;
    }

    let i = 0;
    let j = s1.length-1;
    while(j<s2.length){
        if(windowSizeValid(s1Arr,s2Arr)){
            return true;
        }
        //if it is not valid move the window and also decrease the value in frequency;
        else {
            s2Arr[s2.charCodeAt(i)-97]= s2Arr[s2.charCodeAt(i)-97]-1;
            i++;
            j++;
            s2Arr[s2.charCodeAt(j) - 97] = s2Arr[s2.charCodeAt(j) - 97] + 1;

        }
    }
    return false;

    // check the frequency is valid or not valid on both arrays 
    function windowSizeValid(s1Arr,s2Arr){
        for(let i = 0; i < 26; i++){
            if(s1Arr[i] !== s2Arr[i]){
                return false;
            }
        }
        return true;
    }
    
};