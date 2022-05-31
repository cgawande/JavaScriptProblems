//sum of digit
let num = 3218;
let output = 0;
count = 0;
while (num != 0) {
    output += num % 10;
    num = parseInt(num / 10);
    count++
}
console.log(output);