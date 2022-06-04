//write a program to print first 10 fibonaki series.
let temp;
let pre = 0;
let curr = 1;
n = 10;
for (i = 1; i <= n; i++) {
    temp = pre;
    pre = curr;
    curr = pre + temp;
    console.log(curr)
}
console.log(curr)