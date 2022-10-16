// For Of Loop
const newArray = [1,2,3,4,5]
for (let val of newArray) {
    if (val > 3) {
        console.log(val)
    }
}

//for in loop
const newObj = {
    'name': 'priyajit', 
    'age': '38', 
    'job': 'developer'
}

for(let val in newObj){
    console.log("my "+val+" is "+newObj[val])
}