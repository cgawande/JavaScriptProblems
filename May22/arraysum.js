const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0, 1, 1, 1]
];

let sum = 0;
for (i = 0; i < arr.length; i++) {
    let ele = arr[i]
    for (j = 0; j < ele.length; j++) {
        sum += arr[i][j]
    }
}
console.log(sum)