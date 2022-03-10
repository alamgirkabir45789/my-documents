const b = "Dhaka Bangladesh ";
const a = "Dhaka";
console.log(b.split(""));
console.log(a.charAt(3));
console.log(a.indexOf("a"));
console.log(a.lastIndexOf("a"));
console.log(a.search("a"));
console.log(a.matchAll("a"));
console.log(a.match("a"));
console.log(a.includes("a"));
console.log(a.startsWith("a", 2));
console.log(a.endsWith("a", 3));

//Number
const data = "Bangladesh";
const myNum = "hi";
const myNum2 = 55;
console.log(data + myNum + myNum2);

console.log(isNaN(myNum));
const biNum = 20;
console.log(biNum.toString(2));

const x = 6.25666;
console.log(x.toString());
console.log(x.toFixed(2));
console.log(x.toPrecision(3));
const y = "10.50";
console.log(Number(y));
console.log(parseInt(y));
console.log(parseFloat(y));
console.log(Number.MIN_VALUE);
