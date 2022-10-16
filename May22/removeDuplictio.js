let arr=[1,1,2,2,1,4,6,7,8]
let newarr=arr.filter((ele,i,aray)=>aray.indexOf(ele)===i)
console.log(newarr)


myArray=[...arr]
const unique = [...new Set(myArray)];
console.log(unique)

const students = [
  {
    name: 'Krunal',
    age: 26
  },
  {
    name: 'Ankit',
    age: 25
  },
  {
    name: 'Krunal',
    age: 26
  }
]
const uniqueArr = [... new Set(students.map(data => data.name))]
console.log(uniqueArr)

function toUniqueArray(a){
    var newArr = [];
    for (var i = 0; i < a.length; i++) {
        if (newArr.indexOf(a[i]) === -1) {
            newArr.push(a[i]);
        }
    }
  return newArr;
}
var colors = ["red","red","green","green","green"];
var colorsUnique=toUniqueArray(colors); // ["red","green"]

var array = [3,7,5,3,2,5,2,7];

for(var i=0;i<array.length;i++) {
    for(var j=i+1;j<array.length;j++) {
        if(array[i]===array[j]) {
            array.splice(j,1);
        }
    }
}
console.log(array); // output = [3,7,5,2]

var array = [100, 23, 45, 67, 45,
                    33, 34, 69, 100, 23];
              function xyz(){         
        var outputArray = [];
          
        // Count variable is used to add the
        // new unique value only once in the
        // outputArray.
        var count = 0;
          
        // Start variable is used to set true
        // if a repeated duplicate value is 
        // encontered in the output array.
        var start = false;
          debugger
        for (j = 0; j < array.length; j++) {
            for (k = 0; k < outputArray.length; k++) {
                if ( array[j] == outputArray[k] ) {
                    start = true;
                }
            }
            count++;
            if (count == 1 && start == false) {
                outputArray.push(array[j]);
            }
            start = false;
            count = 0;
        }
              return outputArray;
              }
       xyz()