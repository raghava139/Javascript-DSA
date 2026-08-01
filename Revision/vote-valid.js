function vote_Valid(age) {
    if (age < 0) {
        return 'not Valid'
    }
    if (age >= 18) {
        return 'valid';
    } else {
        return 'Less than 18 there is no Vote';
    }
}
let result = vote_Valid(20);
console.log(result);