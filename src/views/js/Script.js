const numbers=[4,5,6,7,8,9];

const copyArr=[...numbers]
numbers.push(44,)
console.log(numbers)
const newNum=[...numbers,33,44,55];
console.log(newNum)
console.log(copyArr)

const myObj1={
    name:'Ak',
    age:44
}
const myObj2={
    name:'Bk',
    age:3
}

const newObj={
    ...myObj1,
    ...myObj2
}
console.log(newObj.name)