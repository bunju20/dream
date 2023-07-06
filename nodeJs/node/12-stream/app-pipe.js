const fs = require("fs");
const zlib = require("zlib");
const zlibStream = zlib.createGzip();
const readStream = fs.createReadStream("./file.txt");
const writeStream = fs.createWriteStream("./file4.txt");
const piping = readStream.pipe(zlibStream).pipe(writeStream);
//stream끼리 연결해주는 것

piping.on("finish", () => {
  console.log("done!");
});
