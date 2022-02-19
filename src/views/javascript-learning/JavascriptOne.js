function Person(name, age) {
  this.name = name;
  this.age = age;
  // this.eat=function(){
  //     console.log(`${this.name} is eating`);
  // }

  Person.prototype = {
    eat: function () {
      console.log(`${this.name} is eating`);
    },
  };
}

const rakib = new Person("Rakib", 33);
console.log(rakib);

const s = function Student() {};
console.dir(s);

//Master Object
Object.prototype.kabir=function(){
    console.log("I am Kabir");
}

//Create Object
var obj={};
obj.kabir();