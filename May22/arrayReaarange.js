let arr=[-1,2,3,5,7,-5,-2,4,-3]
let n= arr.length
function rearrange(arr, n)
{
    let j = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] < 0) {
            if (i != j){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            j++;
        }
    }
    return arr
}

console.log(rearrange(arr,n))

