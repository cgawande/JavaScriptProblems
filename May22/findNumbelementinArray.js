//find the given number hpow many times in array.

let arr=[1,1,2,3,4,5,4,6]

 function countNumber(arr,n){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==n){
            count++;
        }
    }
    return count;
 }
 console.log(countNumber(arr,7))