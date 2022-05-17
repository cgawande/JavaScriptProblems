//write JavaScript Program to Find the Largest Among Three Numbers

function largestNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1 + " is the largest number";
    } else if (num2 > num1 && num2 > num3) {
        return num2 + " is the largest number";
    } else {
        return num3 + " is the largest number";
    }
}
console.log(largestNumber(550, 2000, 23400));