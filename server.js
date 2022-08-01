const fs = require("fs");

const input = fs.readFileSync("./starter/txt/input.txt", "utf-8");
console.log(input);

const textOut = `This is what we know about avacardo: ${input} . \n created at ${Date.now()}`;
fs.writeFileSync("./starter/txt/output.txt", textOut);
console.log("file written");
