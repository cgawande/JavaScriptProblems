//second max no

const result =function secondEle(arr){

    let max=-1;
    let secMax=-1;
    arr.forEach((el)=>{
        if(el>max){
            let temp=max;
            max=el;
            secMax=temp
        }else if(el>secMax){
            secMax=el;
        }
    })
    return secMax;
}
console.log(result([1,10,10,2,9]))