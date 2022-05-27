// find min and max number in array;
arr = [10, 50, 100, 250, 0, 666];
min = arr[0];
max = arr[0];
for (i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i]
    } else if (arr[i] > max) {
        max = arr[i]
    }
}
console.log(min, max)