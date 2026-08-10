import { randomBytes, randomUUID, createHash } from "crypto";

// const token = randomBytes(16).toString("hex");

// console.log(token);

// const id = randomUUID();

// console.log(id);


// const user1 = randomUUID();
// const user2 = randomUUID();
// const user3 = randomUUID();


// console.log("user1:", user1);
// console.log("user2:", user2);
// console.log("user3:", user3);


// const pass = "admin124";

// const hashedPassword = createHash("sha-256").update(pass).digest("hex");

// console.log(hashedPassword);



const token = randomBytes(16).toString("hex");


const userId = randomUUID();


const pass = "admin123";

const hashedPassword = createHash("sha-256").update(pass).digest("hex");



console.log("Token :", token);

console.log("UserID :", userId);

console.log("Password Hash :", hashedPassword);





