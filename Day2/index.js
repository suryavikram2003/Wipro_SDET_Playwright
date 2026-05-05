
let a= "aryan";
let b = "arush";
let c= "arushi";

let d = "Hello " + a + ", " + b + "and " + c + "! ";
// template literals
let e= `Hello ${a}, ${b} and ${c}!`;
// Using template literals to get length
let f =`The length of a is ${a.length * 2}`;


//Functions
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Vikram"));

function table(num) {
     let result = "";
     for(let i=1; i<=10; i++) {
          result += `${num} x ${i} = ${num *i}\n`;
     }
     return result;
}

// function sum(a,b)
// {    return a + b;

// }

//let sum1 = sum(10, 20);
// console.log("Sum of 10 and 20:", sum1);
//let sum1 = sun(5,10);
let sum = (x, y) => x+y;
console.log("Sum of 5 and 10:", sum(5,10));

//map(): Creates a new array by transforming every element of an existing array using a provided function.
//filter(): Creates a new array containing only the elements that pass a specific test (condition).
//let arr = [1, 2, 3, 4, 5];
// arr.map(function(x){
//     console.log("element after *2: " + (x * 2));
// })
//arr.map(x => x*2).forEach(x => console.log("element after *2: " + (x * 2)));


 let arr = [1, 2, 3, 4, 5, "Surya", "Vikram", "Aryan"];

arr.filter(function(x) {
    return typeof x === "number";
}).map(function(y) {
    return y * 2;
}).forEach(function(abc) {
    console.log("Element after * 2:", abc * 2);
});

// arr.filter(x => typeof x === "number").map(y => y *2).forEach(abc => console.log("Element after * 2:", abc * 2))

// console.log(Math.floor(Math.random() * 100) + 1); // 1 to 100
// // floor -> rounds down to the nearest integer 0.9 --> 0
// // 0 --> 99.999 -> 99 [0 - 99]

// // Math.random --> 0 - 1 * 10 --> 0 - 10
// // Math.floor(x) --> 0.3 (0, 1) = 0, 1.6 (1, 2) = 1, 3.998 (3, 4) = 3
// // floor(0.1, 9.999) -> [0, 9]


let strnum = "5";
console.log(Number(strnum));
console.log(String(5));

let val = "0.6";
console.log(parseInt(val));
console.log(parseFloat(val));

// // floor [int] -> Low int, parseInt -> type conversion (string -> int)

let colors = ["red", "green" , "blue"];
console.log(colors.indexOf("yellow"));
console.log(colors.includes("yellow"));
console.log(colors.length);
console.log(colors[3]); // undefined
console.log(colors[colors.length - 1]);
colors.push("yellow"); 
console.log(colors);
colors.pop();
console.log(colors);
colors.unshift("purple"); 
console.log(colors); 
colors.shift(); 
console.log(colors);


console.log(colors.splice(0, 1));
console.log(colors.splice(1, 2));
console.log(colors.splice(1, 3));
