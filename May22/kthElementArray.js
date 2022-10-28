//find kth element in arry

let arr=[7,8,2,5,1,9,2,6,3];
let k=5;

function kthSmallest(arr,k){
    arr.sort((a,b)=> a-b)
  
  
  return arr[k-1]
  
}
console.log(kthSmallest(arr,k))

//Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log("Sorted array=>", arr);