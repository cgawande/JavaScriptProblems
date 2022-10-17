let arr=[1,2,4,3,4,5,1] //find left most index given element;

function findIndex(n){

    for(i=0;i<arr.length;i++){
        if(arr[i]===n){
            return i
        }
    }

return -1
}
console.log(findIndex(1))


//find Right most index given element;


function findIndex2(n){

    for(i=arr.length-1;i>=0;i--){
        if(arr[i]===n){
            return i
        }
    }

return -1
}
console.log(findIndex2(1))