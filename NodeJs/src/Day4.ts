import process from "node:process";
import dotenv from "dotenv";


dotenv.config();



// console.log(process.env.PATH);
// console.log(process.env.PORT_NAME);
// console.log(process.env.APP_NAME);

// process.exit(0);
// process.exit(1);


const username = process.argv[2];

if(!username){
  console.log("Please provide your name.");
  process.exit(1);
}

console.log("_______________________");
console.log(`Hello ${username}`);
console.log(`Welcome to ${process.env.APP_NAME}`);
console.log(`Running on Node ${process.version}`);
console.log(`Platform: ${process.platform}`);
console.log(`Project Directory : ${process.cwd()}`);
console.log("_______________________");

process.exit(0);





