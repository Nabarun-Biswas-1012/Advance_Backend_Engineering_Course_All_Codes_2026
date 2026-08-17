// OS MODULE

// import os from "os";

// console.log(os.platform());

// console.log(os.arch());

// console.log(os.cpus().length);

// console.log(os.cpus());

// console.log(os.hostname());

// console.log(os.homedir());

// console.log(os.tmpdir());

// console.log(os.totalmem());

// const totalMemory = os.totalmem();
// console.log(`Total Memory: ${(totalMemory / 1024 / 1024 / 1024).toFixed(2)} GB`);

// const freeMemory = os.freemem();
// console.log(`Total Memory: ${(freeMemory / 1024 / 1024 / 1024).toFixed(2)} GB`);

// PATH MODULE

// import path from "path";

// const filePath = "uploads/images/profile_pic.png";

// const filePath = path.join(
//   "uploads", "images", "profile_pic.png"
// );

// console.log(filePath);

// const filePath = path.resolve(
//   "uploads", "images", "profile_pic.png"
// );

// console.log(filePath);

// const filePath = "/uploads/images/profile_pic.png";

// console.log(path.basename(filePath));

// console.log(path.dirname(filePath));

// console.log(path.extname(filePath)); // jpg, png, webp

// const result =  path.parse("/uploads/images/profile_pic.png");

// console.log(result);

// const filePath = path.format({
//   root: "/",
//   dir: "/uploads/images",
//   base: "profile_pic.png",
//   ext: ".png",
//   name: "profile_pic",
// });


// console.log(filePath);


// console.log(path.sep); 




import path from "path";

const uploadDir = path.join("uploads", "images");

const filePath = path.join(uploadDir, "profile_pic.png");


console.log("Uploaded Dir:", uploadDir);

console.log("File Path:", filePath);

console.log("File Name:", path.basename(filePath));

console.log("Extension:", path.extname(filePath));







