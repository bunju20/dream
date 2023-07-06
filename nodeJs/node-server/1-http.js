const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("incoming...");
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    const read = fs.createReadStream("./html/index.html");
    read.pipe(res);
  } else if (url === "/courses") {
    res.setHeader("Content-Type", "text/html");
    //위와 동일하게
  } else {
    res.setHeader("Content-Type", "text/html");
    //위와 동일하게
  }
  //res.end();
});

server.listen(8080);
