//Default parameters:
function welcome(name = "Guest") { //
    console.log(`Welcome, ${name}!`);
}

welcome("Alice");
welcome("Bob");
welcome();


//Spread operator:
const nums = [1,2,3,4,5];
const newNums = [...nums, 6, 7, 8];
console.log(newNums); // [1, 2, 3, 4, 5, 6, 7, 8]

const obj = {name:"Vikram"};
const updatedObj = {...obj, age: 30};
console.log(updatedObj); // {name: "Vikram", age: 30}

//Rest parameters:
const cal = {
    sum: (...nums) => nums.reduce((a,b) => a + b, 0),
}   
console.log(cal.sum(1,2,3)); // 6

//Destructuring:
//position based destructuring
// const arr = ["Vikram","Surya", "Aarya"];
// const first = arr[0];
// const second = arr[1];
// const third = arr[2];
// console.log(first, second, third); // Vikram Surya Aarya

const [first, second, third] = ["Vikram","Surya", "Aarya"];
console.log(first, second, third); // Vikram Surya Aarya

//Object destructuring:
const obj1 = {name: "Vikram", age: 30, city: "Delhi"};
const names = obj1.name;
const ages = obj1.age;
const cities = obj1.city;
console.log(names, ages, cities); // Vikram 30 Delhi

const {name1, age, city} = {name: "Vikram", age: 30, city: "Delhi"};
console.log(name1, age, city); // Vikram 30 Delhi