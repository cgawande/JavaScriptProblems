
// only one diagonal sum od n*n matrix

let arr=[[1,2,3,4],[2,3,4,5],[5,6,7,8],[9,10,11,12]]
let sum=0;
for(let i=0;i<arr.length;i++){
     sum+=arr[i][i]
}
console.log(sum)

// All diagonal sum od n*n matrix


let arr2= [[1,2,3,4]
          ,[2,3,4,5],
           [5,5,7,8],
           [9,10,11,12]]
let sum2=0;
for(let i=0;i<arr2.length;i++){
     sum2+=arr2[i][i]
}
let diagonal=0;
for(let i=0;i<arr2.length;i++){
diagonal+=arr2[i][arr2.length-i-1]

}
console.log(diagonal)
console.log(sum2+diagonal)
