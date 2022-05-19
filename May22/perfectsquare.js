//1)Program to check if a number is a perfect square
function isPerfectSquare(x) {
    let sr = Math.sqrt(x);
    if (x >= 0 && (sr * sr) == x) {

        return x + " is a perfect square";
    }
    return x + " is not a perfect square";
}
console.log(isPerfectSquare(4))