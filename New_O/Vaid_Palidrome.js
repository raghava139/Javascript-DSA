// Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and 
// removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.


// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

// function ValidPalindrome(s){


//     // Brute Fore Approach 
//     if(!s.length) return false;
//     let sCopy = s;
//     let MainConversion = sCopy?.replace(/[^a-zA-Z0-9]/g,"")?.toLowerCase();
//     let Arr = MainConversion.split("")
//     let nLength = Math.floor(MainConversion.length/2);

//     for(let i=0; i<nLength; i++){
//         let temp = Arr[i];
//         Arr[i] = Arr[nLength-i-1];
//         Arr[nLength-i-1] = temp;
//     }

//     if(Arr.join("") === MainConversion){
//         return true
//     }else{
//         return false;
//     }
// }
// let s = 'MaaM!'
// ValidPalindrome(s)

// Brute Force Approach
// TC: O(n)
// SC: O(n)

//2nd Approach (two Pointer)
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        let a = s[left];
        let b = s[right];

        // If uppercase, convert to lowercase
        a = a.toLowerCase();
        b = b.toLowerCase();

        // Skip non-alphanumeric characters
        if (!(/[a-z0-9]/).test(a)) {
            left++;
            continue;
        }
        if (!(/[a-z0-9]/).test(b)) {
            right--;
            continue;
        }

        // Compare both ends
        if (a !== b) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

let s = 'MaaM!'
isPalindrome(s);

// Complexities
// TC:O(n)
// SC:O(1)