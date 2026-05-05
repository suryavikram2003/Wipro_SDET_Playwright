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

// //Resolve
// function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { // used to execute after some delay provide with the seconds mentioned below
//             resolve("Data fetched successfully");   // success message are displayed using resolve.
//         }, 2000); // delay seconds mentioned in ms.
//     });
// }
//  // this is like the try catch, which is used to execute and proivde the output, if getdata() function is successful then is executed.
// getdata().then(data => {  
//     console.log(data);
// }).catch(error => {
//     console.error("Error fetching data:", error);
// });

// //Reject
// // example for rejecting  or getting an error.
// function getdataerror(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() =>{
//             reject("Error fetching data");
//         },2000);
//     });
// }
// // reject will get into the catch block and the message is displayed.
// getdataerror().then(data =>{
//     console.log(data);
// }).catch(error =>{
//     console.error("Error fetching data:", error);
// });


// setTimeout(() => {  console.log("This is a timeout function"); }, 3000 ); // it is used to execute with some delay.
// setInterval(() => { console.log("This is an interval function"); }, 1000); // it used to execute with some interval time.




//     fetch("https://jsonplaceholder.typicode.com/todos")
//   //  .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error("Error fetching data:", error));

// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(res => res.json()) // res -> string -> json)
//     .then(data => data.filter(d => d.id % 2 === 0))
//     .then(data => data.map(d => (d.title = "Vikram  " + d.title)))
//     .then(data => console.log(data))
//     .catch(error => console.error("Error fetching data:", error));
 

    // userid %2=0 -> even id's
    // fetch("https://jsonplaceholder.typicode.com/todos")
    // .then(res => res.json())
    // .then(data => data.filter(d => d.userId % 2 === 0))
    // .then(data =>data.map(d =>(d.title = " Book Title: " + d.title)))
    // .then(data => console.log(data))

    // .catch(error => console.error("Error fetching data:", error));

// getData().then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.error("Error:", error);
// });
 
// setTimeout(() => {
//     console.log("Data received");
// }, 5000);
// console.log("test");
 
// setInterval(() => {
//     console.log("Checking for new data...");
// }, 3000);

// fetch("u6ArRuAc4GRARJ0xr9mRwFl2lYZZsDkd")
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.error("Error fetching data:", error));
// fetch("https://api.apilayer.com/currency_data/live?source=USD", {
//   headers: {
//     apikey: "u6ArRuAc4GRARJ0xr9mRwFl2lYZZsDkd"
//   }
// })
// .then(res => res.json())
// .then(data => console.log(data));


// fetch("https://api.apilayer.com/number_verification/validate?number=u6ArRuAc4GRARJ0xr9mRwFl2lYZZsDkd")
//  .then(response => response.json())
//      .then(data => console.log(data))
//      .catch(error => console.error("Error fetching data:", error));


  //   u6ArRuAc4GRARJ0xr9mRwFl2lYZZsDkd


// var myHeaders = new Headers();
// myHeaders.append("apikey", "u6ArRuAc4GRARJ0xr9mRwFl2lYZZsDkd");

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

// fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=symbols&base=base", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));


// fetch("https://open.er-api.com/v6/latest/USD")
//   .then(res => res.json())
//   .then(data => {
//     console.log("USD to INR:", data.rates.INR);
//     console.log("USD to EUR:", data.rates.EUR);
//     console.log("USD to GBP:", data.rates.GBP);
//   })
//   .catch(err => console.error(err));

// //Print value Greater than 90
// fetch("https://open.er-api.com/v6/latest/USD")
//   .then(res => res.json())
//   .then(data => {
//     let result = Object.entries(data.rates)
//       .filter(([currency, value]) => value > 90);

//     console.log(result);
//   })
//   .catch(err => console.error(err));

  

   fetch("https://catfact.ninja/facts?limit=10")
  .then(response => response.json())
  .then(data => console.log(data))
     .catch(error => console.error("Error fetching data:", error));