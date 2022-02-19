const obj1 = {
  name: "Kabir",
  age: 55,
  lang: { programming: ["C#", "Angular", "Java"] },
};
const obj2 = obj1;
obj2.designation = "Developer";
const obj3 = {
  obj2,
  name: "Rahim",
};

const myObj4 = { ...obj3 };
console.log(myObj4);

//Var , Const and Let
const a = 4;
console.log(a);
let d = 5;
d = 6;

console.log(d);
