// import { randomBytes, scrypt as scryptCallback } from "crypto";
// import { promisify } from "util";

// // const salt = randomBytes(16).toString("hex");

// // console.log(salt);

// const scrypt = promisify(scryptCallback);

// async function hashPassword(password: string){
//   const salt = randomBytes(16).toString("hex");

//   const derivedkey = await scrypt(password,salt, 64 ) as Buffer;


//   return `${salt}: ${derivedkey.toString("hex")}`;
// }

// const passWordHash1 = await hashPassword("password1234");
// const passWordHash2 = await hashPassword("password1234");

// // console.log("HashedPassword_1: ",passWordHash1);
// // console.log("HashedPassword_2: ",passWordHash2);



// async function verifyPassword(
//   password: string,
//   storedPassword: string
// ){
//      const [salt, storedHash] = storedPassword.split(":");

//      const derivedKey = await scrypt(password, salt, 64) as Buffer;

//      return derivedKey.toString("hex") === storedPassword;
// }



// salt : Hashbcascuoh8y234223o






// FULL EXAMPLE BELOW


import { randomBytes, scrypt as scryptCallback } from "crypto";

import { promisify } from "util";

const scrypt = promisify(scryptCallback);

async function hashPassword(password: string){
  const salt = randomBytes(16).toString("hex");

  const derivedkey = await scrypt(password,salt, 64 ) as Buffer;


  return `${salt}:${derivedkey.toString("hex")}`;
}



async function verifyPassword(
  password: string,
  storedPassword: string
){
     const [salt, storedHash] = storedPassword.split(":");

     const derivedKey = await scrypt(password, salt, 64) as Buffer;

     return derivedKey.toString("hex") === storedHash;
}


async function main(){
  const password = "password123@";

  const storedPassword = await hashPassword(password);



  console.log("StoredPassword: ", storedPassword);


  const isValid = await verifyPassword("password123@", storedPassword);

  console.log("Correct Password: ", isValid);


  const isInValid = await verifyPassword("wrongpassword", storedPassword);
  

  console.log("InCorrect Password: ", isInValid);


}


main();