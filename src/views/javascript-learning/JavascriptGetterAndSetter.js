class Person{
constructor(name,age){
    this.name=name;
    this.age=age;
}
eat(){
    console.log(`${this.name} is eating`);
}
//Getter
get getName(){
    return this.name;
}

//Setter
set setName(name){
    return this.name=name
}

//Static Method
static staticMethod(name){
    console.log("This is Static Method");
}



}


let person=new Person("Kabir",22);
// console.log(person.getName)

//Set
console.log(person.setName="Rakib");
Person.staticMethod();