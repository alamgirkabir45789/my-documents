const date = new Date();
const months = ["Januray", "February", "March", "April"];
console.log(Math.PI);

const num = 5.4;
console.log(Math.trunc(num));

console.log(Math.max(55, 22, 44));
console.log(Math.min(33, 5, 77, 2));

console.log(Math.floor(Math.random() * 10));

//Random Num
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min));
}
console.log(getRandomNum(2, 300));

let age = 80;
console.log(
  age >= 18 ? (age < 30 ? "your adult" : "you are old") : "you are young"
);

let myAge = "10";
if (isNaN(myAge)) {
  console.log("Not number format");
} else {
  console.log(myAge > 30 ? "old" : "young");
}

let testAge = 45;
if (testAge >= 18) {
  console.log("adult");
} else if (testAge > 30) {
  console.log("old");
} else {
  console.log("young");
}
switch (new Date().getDay()) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("young");
    break;
  default:
    console.log("not matched");
}
