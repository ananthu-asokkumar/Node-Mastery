const fs = require("fs"); // file system

// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

// console.log({ textIn });

const textOut = `This is what we know about the avacardo: ${textIn} \n Create on ${Date.now()}`;

fs.writeFileSync("./txt/output.txt", textOut);
console.log(FileWritten);
