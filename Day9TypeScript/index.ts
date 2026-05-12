// // let name = "Surya";
// // console.log(name);


// let name: string = "Surya";

// let result: number | string;
// result = 42; // Valid
// result = "Hello"; // Valid
// console.log(name, result);


// function add(a:number, b:number):string{
//     return "Sum is:" +(a+b);
// }
// console.log(add(5,10));


// interface Person{
//     id: number;
//     name: string;
//     age: number;
//     role: Role; // Using the Role enum
//     isAdmin?: boolean; // Optional property specified with '?'
// }
// // interface merging - we can add new properties to the existing interface
// interface Person
// {
//     email: string; // Adding a new property to the existing interface
// }
// //enum - it is a way to define a set of named constants.
// //  It can be used to represent a collection of related values that can be either numeric or string-based. 
// // Enums provide a way to organize and manage these values in a more readable and maintainable way.
// enum Role{
//     User = "USER",
//     Admin = "ADMIN",
//     SuperAdmin = "SUPER_ADMIN"
// }
// const user : Person ={
//     id: 1,
//     name: "Surya",
//     age: 30,
//     role: Role.User, // Using the Role enum
//     email: "surya@example.com"
// };

// const admin: Person ={
//     id: 2,
//     name: "Admin",
//     age: 35,
//     role: Role.Admin, // Using the Role enum
//     email: "admin@example.com"
// };

// console.log(user,admin)


// //Tuple: A tuple is a data structure that can hold a fixed number of elements of different types.
// // It is defined using square brackets [] and can contain elements of any type, including other tuples.

// let coordinates: [number, number] = [10, 20]; // A tuple with two numbers
// console.log("Coordinates:", coordinates);

// let arr: number[] = [1, 2, 3, 4, 5]; // An array of numbers
// console.log("Array:", arr);

// //Generics: Generics allow you to create reusable components that can work with different types.
// function identity<T>(arg: T): T {
//     return arg;
// }
// let output = identity<number>(42); // Using the generic function with a number
// let output2 = identity<string>("Hello"); // Using the generic function with a string
// let output3 = identity<boolean>(true); // Using the generic function with a boolean

// console.log(output, output2, output3);



let name: string = "Vikram";
let result: number | string;
result = 45;
result = "success";
console.log(name, result);

function add(a: number, b: number): string {
    return "Sum: " + (a + b);
}

console.log(add(5, 10));

interface Person {
    id: number;
    name: string;
    age: number;
    role: Role; // using enum for role
    isAdmin?: boolean; // optional property ?
}

interface Person {
    email: string; // merge interface to add email property
}

enum Role {
    User = "USER",
    Admin = "ADMIN",
    SuperAdmin = "SUPER_ADMIN"
} // USER, user, User, ADMIN, Admin, admin, SUPER_ADMIN, SuperAdmin, superAdmin

const user: Person = {
    id: 1,
    name: "Vikram",
    age: 25,
    role: Role.User,
    email: "Vikram@gmail.com"
};

const admin: Person = {
    id: 2,
    name: "Surya",
    age: 20,
    email: "Surya@gmail.com",
    role: Role.Admin,
    isAdmin: true
};

console.log(user, admin);

let coordinates: [number, string] = [40.7128, "-74.0060"]; // Tuple for latitude and longitude
console.log("Coordinates:", coordinates);

let arr: number[] = [1, 2, 3]; // array of numbers
console.log("Array:", arr);

// function identity<T>(arg: T): T {
//     return arg;
// }

// let output = identity<number>(10);
// let outpu1 = identity<string>("Aaryan");
// let outpu2 = identity<boolean>(true);

// console.log(output, outpu1, outpu2);

// Generic interface for a bag that can hold any type of content
// interface Bag<T> {
//     content: T;
// }

// const stringBag: Bag<string> = {content: "Apple"};
// const numberBag: Bag<number> = {content: 5};

// console.log(stringBag, numberBag);
// Generic class for a storage that can hold items of any type
class Storage<T> {
    private items: T[] = [];
    // Method to add an item to the storage
    addItems(item: T): void { // no return type
        this.items.push(item);
    }
    // Method to get an item from the storage by index
    // The non-null assertion operator '!' is used to indicate that the item will exist at the given index, even though TypeScript cannot guarantee it at compile time.
    getItem(index: number): T {
        return this.items[index]!; // non-null assertion operator to indicate that the item will exist at the given index
    }
}

const names = new Storage<string>();
names.addItems("Surya");
names.addItems("Vikram");
names.addItems("John");

console.log(names.getItem(0), names.getItem(1), names.getItem(2), names.getItem(3)); // undefined for index 3




interface HasLength {
    length: number;
}

// generics with contraints | extends keyword
function logLength<T extends HasLength>(arg: T): void { // T -> property .length --> string, arrays
    console.log(arg.length);
}

logLength("Aaryan"); // string --> length
logLength([1, 2, 3]); // array --> length
// logLength(10); // number --> X

