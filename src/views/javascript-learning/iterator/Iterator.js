const myArr = ["Apple", "Rubel", "Sirajul"];
let newArr = myArr[Symbol.iterator]();
console.dir(newArr.next());
console.dir(newArr.next());

const myObj = {
  name: "kabir",
  age: 33,
  profession: "Developer",
};
console.dir(myObj);

console.log({..."helloworld"})
