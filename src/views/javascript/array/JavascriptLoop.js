let i = 6;
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i);

//For in loop
const person = {
  name: "Rakib",
  age: 44,
  profession: "Develope",
};
for (let p in person) {
  console.log(person[p]);
}

const myArr = [44, 5, 66, 7, 8];
for (let arr in myArr) {
  console.log(myArr[arr]);
  console.log(arr);
  console.log(myArr);
}
