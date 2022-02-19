function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Cricketer(name,age,type, country) {
  Person.call(this);
  this.name=name;
  this.age=age;
  this.type = type;
  this.country = country;
}

Person.prototype={
    eat:function(){
        console.log(`${this.name} is eating`);
    }
}
Cricketer.prototype=Object.create(Person.prototype);
Cricketer.prototype.constructor=Cricketer;

Cricketer.prototype.play=function(){
    console.log(`${this.name} is playing`)
}

// const cricketer=new Cricketer("Sakib",33,"All Rounder","Bangladesh");
// console.log(cricketer.play())

// let a = {k
//   name: "Karim",
// };
// let p = Object.create(a);
// console.log(p.name);

const crk=new Cricketer("Tamim",33);
console.log(crk.play());