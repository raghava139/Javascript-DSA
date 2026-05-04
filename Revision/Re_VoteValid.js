function voteValidForAge(age) {
    if (age < 0) return 'invalid Input'
    if (age < 18) return 'age not Valid';
    return 'Valid'
}

let age = 80;
voteValidForAge(age);

// TC: O(1);
// Sc: O(1);