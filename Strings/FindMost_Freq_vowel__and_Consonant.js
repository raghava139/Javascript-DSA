/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let obj = {};
    for(let i=0;i<s.length;i++){
        if(obj[s[i]]){
            obj[s[i]] = obj[s[i]] + 1
        }
        else{
            obj[s[i]] = 1
        }
    }
    let vowelsCount = 0;
    let constantsCount = 0;
    let Vowels = 'aeiou'
    // for ([key,value] of Object.entries(obj)){
    //     if(Vowels.includes(key) && value  > vowelsCount){
    //         vowelsCount = value
    //     }
    //     else if(!Vowels.includes(key) &&value > constantsCount){
    //         constantsCount = value
    //     }
    // }

    // for(let i=0;i<s.length;i++){
    //     if(Vowels.includes(s[i])){
    //         if(obj[s[i]]  > vowelsCount){
    //             vowelsCount =  obj[s[i]] 
    //         }
    //     }
    //     else {
    //         if(obj[s[i]] > constantsCount){
    //           constantsCount =  obj[s[i]] 
    //         }
    //     }
    // }

    let objKeys = Object.keys(obj);
    for(let i=0;i<objKeys.length;i++){
        if(Vowels.includes(objKeys[i])){
            if(obj[objKeys[i]]  > vowelsCount){
                vowelsCount =  obj[objKeys[i]] 
            }
        }
        else {
            if(obj[objKeys[i]] > constantsCount){
              constantsCount =  obj[objKeys[i]] 
            }
        }
    }
    return vowelsCount + constantsCount;

    // three approaches of conditions;  
    // s.length   => tc: O(n) 
    // object.keys() => TC: O(1) 20 max chars
    // object.entries() => TC: O(1) 20 max chars
    // .includes => TC: O(1) because 5 max chars

    // Frequency object
    // max unique lowercase chars = 26
    // SC: O(1)

    // Approaches:
    // 1. Loop through s.length
    //    TC: O(n)

    // 2. Object.keys(obj)
    //    General: O(k)
    //    Here: O(1) because max 26 keys

    // 3. Object.entries(obj)
    //    General: O(k)
    //    Here: O(1) because max 26 keys

    // 4. vowels.includes(char)
    //    General: O(m)
    //    Here: O(1) because "aeiou" length is 5
};