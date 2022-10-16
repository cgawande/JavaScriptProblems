//playing with array
let array = [1, 2, 3];
console.log(array[0])
array[0] = 3;
console.log(array[0])

// Setup
const myArray = [
    ["John", 23],
    ["dog", 3]
];
myArray.shift();
myArray.unshift(["Paul", 35]);
console.log(myArray)

const months = ['Jan', 'March', 'April', 'June'];
months.splice(2, 2)
console.log(months)
months.splice(1, 0, "feb")
console.log(months)

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', "deer"];

console.log(animals.slice(-1));


console.log(animals.slice(2, 4));


console.log(animals.slice(1, 5));


console.log(animals.slice(-2));
console.log(animals.slice(2, -1));
console.log(animals.slice());
console.log(animals.slice(2, -2));