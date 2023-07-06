const { count } = require("console");
const fs = require("fs");
const data = [];
const readStream = fs
  .createReadStream("./file.txt", {
    // highWaterMark: 8, //8바이트씩 읽어와라
    // encoding: "utf-8",
  })
  .on("data", (chunk) => {
    //console.log(chunk);
    data.push(chunk);
    console.count("data");
  })
  .on("end", () => {
    console.log(data.join(""));
  })
  .on("error", (error) => {
    console.log(error);
  });

//이러면 전체 데이터가 잘 출력된다.
