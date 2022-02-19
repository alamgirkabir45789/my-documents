class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }

  play() {
    console.log(`${this.name} is play`);
  }
}

class Cricketer extends Person {
  constructor(name, age, type, country) {
    super(name);
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
  }
  play() {
    super.play();
    console.log(`${this.name} is play cricket`);
  }
}
// const tamim = new Person("Tamim", 33, "Batsman", "Bang");
// console.log(tamim.eat());

const player = new Cricketer("Sakib", 33, "All Rounder", "Bangladesh");
console.log(player.play());
