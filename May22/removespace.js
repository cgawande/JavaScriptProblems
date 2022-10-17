function removeSpace(str){

    let newStr=str.split("")
    for(let i=0;i<newStr.length;i++){
        if(newStr[i]===" "){
          newStr.splice(i,1)
        }
    }
return newStr.join("")
}
console.log(( removeSpace("chandrakant gawan nd e")))