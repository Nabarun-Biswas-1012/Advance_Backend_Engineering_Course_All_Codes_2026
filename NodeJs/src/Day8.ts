// TIMERS
// setTimeout(), setInterval(), setImmediate()

// SETTIMEOUT()

// setTimeout(()=>{
//   console.log("Hello from backend!");
// }, 2000);

// console.log("Start");

// setTimeout(()=>{
//   console.log("Inside Timeout Function!!");

// }, 5000);

// console.log("End");

// function sayHello(){
//   console.log("Hello from Node.js");
// }

// setTimeout(sayHello, 2000);

// function greet(name: string){
//   console.log(`Hello ${name}`);
// }

// setTimeout(greet, 2000, "Nabarun");

// const timer = setTimeout(()=>{
//   console.log("This will not execute");
// }, 5000);

// clearTimeout(timer);

// SETINTERVAL()

// setInterval(()=>{
//   console.log("Running....");

// }, 2000)

// setTimeout() => executes the callbacks once

// setInterval() => repeatedly executes the callback

// let count = 0;

// const interval = setInterval(()=>{

//   count++;

//   console.log(`Count: ${count}`);

//   if(count === 5 ){
//     clearInterval(interval);
//   }

// }, 1000);

// import os from "os";

// const interval = setInterval(()=>{

// const freeMemory = os.freemem() / 1024 /1024 /1024;

// console.log(`Free Memory: ${freeMemory.toFixed(2)} GB`);

// }, 5000)

// SETIMMEDIATE()

// console.log("Start");

// setImmediate(()=>{console.log("Inside Immediate Function/method");
// })

// console.log("End");

// setTimeout(()=>{
//   console.log("This is the Timeout function");

// }, 0);

// setImmediate(()=>{
//   console.log("This is the Timeout function");

// });

// setTimeout(()=>{
//   console.log("Timeout....");

// }, 0)

// console.log("A");

// setTimeout(()=>{console.log("B");}, 0)

// console.log("C");

// console.log("START");

// setTimeout(() => {
//   console.log("This is SetTimeout function!!");
// }, 2000);

// const interval = setInterval(() => {
//   console.log("This is SetInterval function!!");

//   clearInterval(interval);
// }, 2000);



// setImmediate(()=>{
//   console.log("This is SetImmediate function!!");
// })

// console.log("END");



console.log("1");


setTimeout(()=>{console.log("2");}, 0);


console.log("3");


setImmediate(()=>{console.log("4");});


console.log("5");

