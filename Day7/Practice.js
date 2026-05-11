//1. Swap two numbers (without third variable)
let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log(a, b);

//2. Check data type
function checkType(value) {
    if (value === null) return "null";
    return typeof value;
}

console.log(checkType(10));
console.log(checkType("hello"));
console.log(checkType(true));
console.log(checkType(null));
console.log(checkType(undefined));


//3. Celsius → Fahrenheit
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;

console.log(fahrenheit);
//4. Simple Calculator
let d = 10, e = 5;
let operator = "+"; // +, -, *, /

switch(operator) {
    case "+": console.log(d + e); break;
    case "-": console.log(d - e); break;
    case "*": console.log(d * e); break;
    case "/": console.log(d / e); break;
}
//5. Calculate Age
let birthYear = 2002;
let currentYear = new Date().getFullYear();

console.log(currentYear - birthYear);


//1. Reverse a string (no reverse())
function reverseStr(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

console.log(reverseStr("hello"));
//2. Count vowels
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}

console.log(countVowels("javascript"));
//3. Palindrome check
function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("madam"));
//4. Capitalize each word
function capitalize(str) {
    return str
        .split(" ")
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(capitalize("hello world"));
//5. Longest word
function longestWord(str) {
    let words = str.split(" ");
    let longest = "";

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log(longestWord("I love JavaScript programming"));

//1. Random number (1–100)
let random = Math.floor(Math.random() * 100) + 1;
console.log(random);
//2. Prime number check
function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7));
//3. Factorial
function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));
//4. Fibonacci series
function fibonacci(n) {
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        console.log(a);
        let next = a + b;
        a = b;
        b = next;
    }
}

fibonacci(5);
//5. Armstrong number
function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    let digits = num.toString().length;

    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** digits;
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

console.log(isArmstrong(153));


// ARRAYS
// 1. Find the largest and smallest number in an array

const numbers1 = [12, 45, 7, 89, 23];

let largest = numbers1[0];
let smallest = numbers1[0];

for (let i = 1; i < numbers1.length; i++) {
    if (numbers1[i] > largest) {
        largest = numbers1[i];
    }

    if (numbers1[i] < smallest) {
        smallest = numbers1[i];
    }
}

console.log("Largest:", largest);
console.log("Smallest:", smallest);


// 2. Remove duplicate elements from an array

const numbers2 = [1, 2, 3, 2, 4, 5, 1, 6];

let uniqueArray = [];

for (let i = 0; i < numbers2.length; i++) {

    if (!uniqueArray.includes(numbers2[i])) {
        uniqueArray.push(numbers2[i]);
    }
}

console.log("Array without duplicates:", uniqueArray);


// 3. Sort an array without using built-in sort()

const numbers3 = [5, 2, 9, 1, 7];

for (let i = 0; i < numbers3.length; i++) {

    for (let j = 0; j < numbers3.length - 1 - i; j++) {

        if (numbers3[j] > numbers3[j + 1]) {

            let temp = numbers3[j];
            numbers3[j] = numbers3[j + 1];
            numbers3[j + 1] = temp;
        }
    }
}

console.log("Sorted Array:", numbers3);


// 4. Find second largest number in an array

const numbers4 = [10, 45, 67, 89, 23, 89];

let firstLargest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < numbers4.length; i++) {

    if (numbers4[i] > firstLargest) {

        secondLargest = firstLargest;
        firstLargest = numbers4[i];

    } else if (
        numbers4[i] > secondLargest &&
        numbers4[i] !== firstLargest
    ) {

        secondLargest = numbers4[i];
    }
}

console.log("Second Largest:", secondLargest);



// 5. Merge two arrays and remove duplicates

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const mergedArray = [...arr1, ...arr2];

let finalArray = [];

for (let i = 0; i < mergedArray.length; i++) {

    if (!finalArray.includes(mergedArray[i])) {
        finalArray.push(mergedArray[i]);
    }
}

console.log("Merged Unique Array:", finalArray);


//objects

// 1. Create an object for a student and display all properties dynamically

const student = {
    name: "Surya",
    age: 21,
    department: "CSE",
    college: "Sona College of Technology"
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}


//Loops
//Print star pyramid patter
let rows = 5;

for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);
    let stars = "*".repeat(2 * i - 1);

    console.log(spaces + stars);
}


//Print Multiplication Tables from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(`\nMultiplication Table of ${i}`);

    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}


// Find Sum of All Even number between 1 and 100
let Evensum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        Evensum += i;
    }
}

console.log("Sum of even numbers:", sum);

//Print All Prime Number Between 1 and 100

for (let num = 2; num <= 100; num++) {

    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}


//Number Guessing Game using loop
//math.randon and math.floor


prompt.start();
while(true) {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    let userGuess = parseInt(prompt("Guess a number between 1 and 100: "));
let secretNumber = 7;

let guess = 0;
while (guess !== secretNumber) {
    guess = parseInt(prompt("Guess the number between 1 and 10:"));
    if (guess < secretNumber) {
        console.log("Too low! Try again.");
    }   else if (guess > secretNumber) {
        console.log("Too high! Try again.");
    }
}
}
console.log("Congratulations! You guessed the number.");


const calc = {
    sum: (...op) => op.reduce((acc, curr) => acc + curr, 0),
    sub: (...op) => op.reduce((acc, curr) => acc - curr, 0),
    mul: (...op) => op.reduce((acc, curr) => acc * curr, 1),
    div: (...op) => op.reduce((acc, curr) => acc / curr, 1),
};
 
console.log(calc.sum(5, 5, 10, 20));


//closure
let sum = 0; // 2
function f() {
    function increment() {
        sum++;
        
        function inner2() {
            sum++;
            console.log(sum);
        }
        return inner2();
    }
    return increment();
}
f();
console.log(sum);

let sum = 0; // 2
function f() {
    function increment() {
        sum++;
        
        function inner2() {
            sum++;
            console.log(sum);
        }
        return inner2();
    }
    return increment();
}
f();
console.log(sum);
 
function calculator(a, b, operation) {
    return operation(a, b);
}
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}
console.log("Addition:", calculator(10, 5, add));
console.log("Subtraction:", calculator(10, 5, subtract));
console.log("Multiplication:", calculator(10, 5, multiply));
console.log("Division:", calculator(10, 5, divide));
 
function calculator(a, b, operation) {
    return operation(a, b);
}
 
function add(x, y) {
    return x + y;
}
 
function multiply(x, y) {
    return x * y;
}
 
console.log("Addition: " + calculator(10, 5, add));
console.log("Multiplication: " + calculator(10, 5, multiply));
 
function calculator(a, b, operation) {
 
    return operation(a, b);
}
 
function add(x, y) {
    return x + y;
}
 
function multiply(x, y) {
    return x * y;
}
 
console.log(calculator(10, 5, add));
 
console.log(calculator(10, 5,
 
function add(a, b) {

    return a + b;

}
 
function subtract(a, b) {

    return a - b;

}
 
function multiply(a, b) {

    return a * b;

}
 
function divide(a, b) {

    return a / b;

}
 
function calculator(a, b, callback) {

    return callback(a, b);

}
 
console.log(calculator(10, 5, add));

console.log(calculator(10, 5, subtract));

console.log(calculator(10, 5, multiply));

console.log(calculator(10, 5, divide));
 




const calc = {
    sum: (...op) => op.reduce((acc, curr) => acc + curr, 0),
    sub: (...op) => op.reduce((acc, curr) => acc - curr, 0),
    mul: (...op) => op.reduce((acc, curr) => acc * curr, 1),
    div: (...op) => op.reduce((acc, curr) => acc / curr, 1),
};
 
 
function calculator(operation, ...operands) {
    return operation(...operands);
}
 
console.log(calculator(calc.sum, 1, 2, 3);


//flatten an array -- manually
