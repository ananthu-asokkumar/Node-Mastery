const fs = require("fs");
// synchronous blocking code
const input = fs.readFileSync("./starter/txt/input.txt", "utf-8");
console.log(input);
console.log("Reading input file");

const textOut = `This is what we know about avacardo: ${input} . \n created at ${Date.now()}`;
fs.writeFileSync("./starter/txt/output.txt", textOut);
console.log("file written");

//asynshronous non - blocking file read

fs.readFile("./starter/txt/final.txt", "utf-8", (error, data) => {
  console.log(data);
});
console.log("reading final file");
