// let name = "Surya";
// console.log(name);


let name: string = "Surya";

let result: number | string;
result = 42; // Valid
result = "Hello"; // Valid
console.log(name, result);


function add(a:number, b:number):string{
    return "Sum is:" +(a+b);
}
console.log(add(5,10));