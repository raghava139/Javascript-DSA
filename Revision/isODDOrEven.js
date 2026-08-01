function isODDOrEven(number) {

    if (number % 2 === 1) {
        return `${number} is Odd`;
    } else {
        return `${number} is Even`;
    }
}
let oddOREven = isODDOrEven(1);
console.log(oddOREven);