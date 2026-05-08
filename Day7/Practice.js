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