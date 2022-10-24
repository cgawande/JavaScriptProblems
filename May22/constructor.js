//write constructor function and creat object

function Car(name,model){
this.name=name;
this.model=model;

this.start=function(){
    console.log(`${this.name} ${this.model} car started`)
}
}

let car1=new Car("alto","logan")

console.log(car1.start())