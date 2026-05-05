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
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 2000);
    });
}

getdata().then(data => {
    console.log(data);
}).catch(error => {
    console.error("Error fetching data:", error);
});

//Reject
function getdataerror(){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            reject("Error fetching data");
        },2000);
    });
}
getdataerror().then(data =>{
    console.log(data);
}).catch(error =>{
    console.error("Error fetching data:", error);
});


//setTimeout(() => {  console.log("This is a timeout function"); }, 3000 );
//setInterval(() => { console.log("This is an interval function"); }, 1000);