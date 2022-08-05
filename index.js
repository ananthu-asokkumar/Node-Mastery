const fs = require("fs"); // file system
const http = require("http");

////////////////
// FILES

///////////////
//SERVER

const server = http.createServer((req, res) => {
  res.end("Hello from the server");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("listening to request on port 8000");
});
