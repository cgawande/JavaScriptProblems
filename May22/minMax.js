// find min and max number in array;
arr = [10, 50, 100, 250, 0, 666];
// if (arr== null || arr.length < 1)
// 		return;
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


function getMinMax(arr){
    if (arr== null || arr.length < 1)
		return;
    let   min = arr[0];
      let max = arr[0];
    
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
          min = arr[i]

      } 
      if (arr[i] > max) {
          max = arr[i]
      }
  }
  let newArr=[min,max]
    return newArr
      }
      console.log(getMinMax(arr))