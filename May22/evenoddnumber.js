// Javascript Program to Check if a Number is Odd or Even

function numberCheck(num) {
    if (num % 2 === 0) {
        return "Number is Even";
    } else {
        return "Number is Odd";
    }
}
console.log(numberCheck(500))