//find kth element in arry

let arr=[7,8,2,5,1,9,2,6,3];
let k=5;

function kthSmallest(arr,k){
    arr.sort((a,b)=> a-b)
  
  
  return arr[k-1]
  
}
console.log(kthSmallest(arr,k))
