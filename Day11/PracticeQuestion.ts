// The Generic API Wrapper
//● Scenario: You need a reusable function to fetch data that automatically types the
//response.
//● Task: Write a generic function fetchData<T>(url: string): Promise<T>. It should use the
//fetch API, check if the response is okay, and return the JSON parsed as type T. Test it
//by creating an Album interface and fetching data from a mock URL.

interface Album{
    userId: number;
    id: number;
    title: string;
}

async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data as T;
}

fetchData<Album>('https://jsonplaceholder.typicode.com/albums/1')
    .then(album => {
        console.log('Album ID:', album.userId);
        console.log('Album Title:', album.id);
        console.log('Album Artist:', album.title);
    })
    .catch(error => {
        console.error('Error fetching album data:', error);
    });


//2. Record Mapping for Configuration
//● Scenario: You are managing feature flags or permissions for specific user roles.
//● Task: Define an enum Role { Admin, Editor, Guest }. Use the Record utility type to create
//a variable PermissionMap where every Role must be mapped to a boolean value. If a
//role is missing from the object, TypeScript should throw an error.


enum Role{
    Admin,
    Editor,
    Guest
}

type PermissionMap = Record<Role, boolean>;

const permissions: PermissionMap = {
    [Role.Admin]: true,
    [Role.Editor]: false,
    [Role.Guest]: false
};

// const permissions2: PermissionMap = {
//     [Role.Admin]: true,
//     [Role.Editor]: false,
//     // [Role.Guest]: false //error if not present
// };
// console.log('Admin Permissions:', permissions[Role.Admin]);
// console.log('Editor Permissions:', permissions[Role.Editor]);
// console.log('Guest Permissions:', permissions[Role.Guest]);



// 3. Exhaustiveness Checking (The never Type) 
// ● Scenario: You want to ensure that if a new member is added to a Union, your logic must be updated to handle it.
//  ● Task: 1. Create a union type TaskStatus = 'Open' | 'InProgress' | 'Closed'.
//   2. Write a function handleTask(status: TaskStatus) using a switch statement.
//    3. In the default case, assign the status to a variable of type never.
//     4. The Test: Add 'Archived' to the union and verify that the code fails to compile until you add the new case


type TaskStatus = 'Open' | 'InProgress' | 'Closed';

function handleTask(status: TaskStatus): string {
    switch (status) {
        case 'Open':
            return "Task is open";

        case 'InProgress':
            return "Task is in progress";

        case 'Closed':
            return "Task is closed";

        default:
            const exhaustiveCheck: never = status;
            return exhaustiveCheck;
    }
}


console.log(handleTask('Open')); 
console.log(handleTask('InProgress'));
console.log(handleTask('Closed')); 



// 4. Recursive Navigation Type
// ● Scenario: You are building a tree structure for a file system or a sidebar menu.
// ● Task: Define a type FolderNode that has a name: string. It should also have an optional
// files: string[] and an optional subFolders property, which is an array of FolderNode
// objects.


type FolderNode = {
    name: string;
    files?: string[];
    subFolders?: FolderNode[];
};

const myFolder: FolderNode = {
    name: "Root",
    files: ["file1.txt", "file2.txt"],
    subFolders: [
        {
            name: "SubFolder1", 
            files: ["file3.txt"],
        }]
};

const myFolder2: FolderNode = {
    name:"Home"
};

console.log(myFolder);
console.log(myFolder2);



// 5. Template Literal Types for CSS
// ● Scenario: You are building a UI library and want to strictly enforce unit types for a
// "spacing" prop.
// ● Task: Create a type MarginValue that only allows strings ending in "px", "rem", or "vh"
// (e.g., "10px", "2rem"). Use Template Literal Types to ensure a number must precede the
// unit


type MarginValue = `${number}px` | `${number}rem` | `${number}vh`;

const margin1: MarginValue = "10px";
const margin2: MarginValue = "2rem";
const margin3: MarginValue = "5vh"; 

console.log(margin1);
console.log(margin2);
console.log(margin3);



// 6. Conditional Types & the infer Keyword
// ● Scenario: You are working with a library that returns data wrapped in a Promise, and
// you need to extract the underlying type.
// ● Task: Create a utility type UnwrapPromise<T>. It should check if T is a Promise. If it is,
// use the infer keyword to return the type the promise resolves to; otherwise, return T
// itself

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type stringtype= UnwrapPromise<Promise<string>>;
type numberType = UnwrapPromise<number>;

const exampleStringType: stringtype = 'example string';
const exampleNumberType: numberType = 123;
console.log('StringType example:', exampleStringType);
console.log('NumberType example:', exampleNumberType);



// 7. The Union Manipulation Puzzle
// ● Scenario: You have a massive union of possible events but need to categorize them for
// specific handlers.
// ● Task: Given type AllEvents = 'click' | 'dbclick' | 'submit' | 'reset' | 'keypress'.
// 1. Use Extract to create MouseEvents (only click and dbclick).
// 2. Use Exclude to create NonFormEvents (everything except submit and reset)


type AllEvents = 'click' | 'dbclick' | 'submit' | 'reset' | 'keypress';

type MouseEvents = Extract<AllEvents, 'click' | 'dbclick'>;
type NonFormEvents = Exclude<AllEvents, 'submit' | 'reset'>;

const mouseEvents: MouseEvents[] = ['click', 'dbclick'];
const nonFormEvents: NonFormEvents[] = ['click', 'dbclick', 'keypress'];

console.log('Mouse Events:', mouseEvents);
console.log('Non-Form Events:', nonFormEvents);



// //8. Async Higher-Order Function (HOF)
// ● Scenario: You want to wrap any asynchronous function with a standard error logger.
// ● Task: Write a generic function safeExecute<T> that takes an async function as an
// argument. It should return a new function that, when called, executes the original
// function inside a try/catch block and returns null if it fails


function safeExecute<T>(asyncFunction :() => Promise<T>):
    () => Promise<T | null>{
        return async () =>{
            try{
                return await asyncFunction();
            } catch (error) {
                console.error('Error occurred:', error);
                return null;
            }
        }
    }
console.log(safeExecute(async () => {
    if (Math.random() > 10){
        throw new Error('Random failure');
    }
    return 'Success';
})());



function safeExecute2<Args extends any[],T>(asyncFnc: (...args: Args) => Promise<T>)
{
    return async (...args:Args): Promise<T | null > =>{
        try{
            return await asyncFnc(...args);
        } catch (error) {
            console.error('Error occurred:', error);
            return null;
        }
}}
const info = async (id:number): Promise<string> =>{
    if(id=== -1) throw new Error('Invalid ID');
    return `Data for ID: ${id}`;
}

async function dryRun(){
    const getData = safeExecute2(info);
    const res = await getData(10);
    const res1 = await getData(-1);
    const res2 = await getData(0);

   console.log('Result for ID 10:', res);
    console.log('Result for ID -1:', res1);
    console.log('Result for ID 0:', res2);
}

dryRun();