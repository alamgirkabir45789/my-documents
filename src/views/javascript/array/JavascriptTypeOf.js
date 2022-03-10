const arr = [3, 4, 55, 5];
console.log(typeof arr);

function myFunc(a, b) {
  return a * b;
}
console.log(myFunc(8, 9));
console.log(typeof myFunc);

function arFunc(arr) {
  return arr.constructor === Array;
}
console.log(arFunc([3, 5]));

//Type Conversion
const num = "10.5";

const myName = "kabir";
const strNum = 55.4;
console.log(strNum.toFixed(1));
console.log(strNum.toPrecision(5));
console.log(String(strNum));
console.log(strNum.toString());
console.log(Number(myName));
console.log(typeof NaN);
console.log(+num);
console.log(num);
console.log(Number(num));
console.log(parseInt(num));
