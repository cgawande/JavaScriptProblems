const arr = [5, 1, 2, 6, 8, 9]

// function findSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//          sum = sum + arr[i]
//     }
//     return sum;
// }

// //same using reduce 

// const output = arr.reduce((acc, curr) => {
//     acc = acc + curr;
//     return acc;
// })

// console.log(output)

function aVeryBigSum(arr) {
    return ar.reduce((a, b) => a + b);
}


const output = arr.reduce(function(max,curr){
if(curr>max){
    max= curr;
  }
  return max;
})

console.log(output)