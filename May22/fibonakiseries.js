//write a program to print first 10 fibonaki series.
let temp;
let pre = 0;
let curr = 1;
n = 9;
for (i = 1; i <= n; i++) {
    temp = pre;
    pre = curr;
    curr = pre + temp;
    
}
console.log(pre)

function fib(n) {
    if (n <= 1)
        return n;
    return fib(n-1) + fib(n-2);
}

console.log(fib(9))