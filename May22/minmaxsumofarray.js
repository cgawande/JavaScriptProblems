function minmax(arr) {
    arr.sort((a, b) => a - b);
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    let sum = 0;
    let max1 = 0;
    let min1 = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];

    }

    return (`${min1=sum-max} ${max1=sum-min}`)
}
arr = [12, 2, 3, 14]
console.log(minmax(arr))