console.log(4 + 5);

let a =5;
let b = 6;
console.log(a + b);

//Mathematical Operations 
console.log("Addition: " + (a + b));
console.log("Subtraction: " + (a - b));
console.log("Multiplication: " + (a * b));
console.log("Division: " + (a / b));
console.log("Modulo: " + (a % b)); 


let str = "Hello, World!";
console.log("String: " + str);
// String Length
console.log("Length of the string: " + str.length);
console.log("Uppercase: " + str.toUpperCase());
console.log("Lowercase: " + str.toLowerCase());
console.log("Substring (0, 5): " + str.substring(0, 5));
// 0 - first character, 5 - last character (not included)

//Logical Operations
let c = 5;
let d = 10;
console.log("c > d: " + (c > d)); // false
console.log("c < d: " + (c < d));
console.log("c == 5: " + (c == 5)); // true
console.log("c != 5: " + (c != 5));
console.log("c >= d: " + (c >= d));
console.log("c <= d: " + (c <= d));



let obj = {
    name: "John",
    age: 30,
    city: "New York"
}
console.log("Object:",obj);
console.log("Name: " + obj.name);
console.log("Age: " + obj.age);
console.log("City: " + obj.city);



function add(a,b)
{
    return a + b;
}
console.log("Addition: " + add(5, 6));


var l = 5;
var v = 6;

{
    let l = 10; // This 'l' is different from the outer 'l'
    var v = 20; // This 'v' is the same as the outer 'v'
    console.log("Inside block - l: " + l); // 10
    console.log("Inside block - v: " + v); // 20
}
console.log("Outside block - l: " + l); // 5
console.log("Outside block - v: " + v); // 20


//Arrays
var arr = [1, 2, 3, 4, 5];
console.log("Array: " + arr);
console.log("First element: " + arr[0]);
console.log("Last element: " + arr[arr.length - 1]);


for(let i =0; i<arr.length; i++)
{
    console.log("Element at index " + i + ": " + arr[i]);
}

let arr2 = [1,2,3,4,5];
for(let i=0;i<arr2.length;i++)
{
    console.log(("Element at index after *2: " + i + ": " + (arr2[i] * 2)));

}

arr2.forEach(function(x){
    console.log("Element after *2: " + (x * 2));
})

let count = arr2.length - 1;
while(count >= 0)
{    console.log("Element at index after *2: " + count + ": " + (arr2[count] * 2));
    count--;
}

//conditional statements
let i =0;
let j =10;

if(i>j)
{
    console.log("i is greater than j");
}
else{
    console.log("i is not greater than j");
}
let choice = "B";
switch(choice)
{    case "A":
        console.log("You chose A");
        break;
    case "B":
        console.log("You chose B");
        break;
    case "C":
        console.log("You chose C");
        break;
    default:
        console.log("Invalid choice");
}

// Calendar --> Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
