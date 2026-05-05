//Promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
//  It allows you to write asynchronous code in a more manageable and readable way, avoiding callback hell.

// A Promise can be in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully, and the promise has a value.
// 3. Rejected: The operation failed, and the promise has a reason for the failure.

// sync  -- execute line by line, one after another
// 1. print("hello");
// 2. send an email to xyz
// 3. get the data from the Api
// sequential execution


//async -- execute without waiting for the previous task to complete

//Resolve
function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // used to execute after some delay provide with the seconds mentioned below
            resolve("Data fetched successfully");   // success message are displayed using resolve.
        }, 2000); // delay seconds mentioned in ms.
    });
}
 // this is like the try catch, which is used to execute and proivde the output, if getdata() function is successful then is executed.
getdata().then(data => {  
    console.log(data);
}).catch(error => {
    console.error("Error fetching data:", error);
});

//Reject
// example for rejecting  or getting an error.
function getdataerror(){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            reject("Error fetching data");
        },2000);
    });
}
// reject will get into the catch block and the message is displayed.
getdataerror().then(data =>{
    console.log(data);
}).catch(error =>{
    console.error("Error fetching data:", error);
});


setTimeout(() => {  console.log("This is a timeout function"); }, 3000 ); // it is used to execute with some delay.
setInterval(() => { console.log("This is an interval function"); }, 1000); // it used to execute with some interval time.
