//이렇게 파일시스템을 가져오고
const fs = require("fs").promises;

//read a file
fs.readFile("./text.txt", "utf8")
  .then((data) => console.log(data))
  .catch(console.error);

//writing a file
fs.writeFile("./file.txt", "Hello, Dream Coders! :)").catch(console.error);
//이렇게하면 파일이 새로 생긴다
//한번 더하면 덮어 씌워져. 원래내용에서 추가할거면 appendFile을 쓰면 된다.
fs.appendFile("./file.txt", "Yo, Dream Coders! :)")
  .then(() => {
    //copy
    fs.copyFile("./file.txt", "./file2.txt").catch(console.error);
    //비동기적으로 처리가 되니까, 데이터 받아오기 전에 복사 끝냈을수되 있지
  })
  .catch(console.error);
//순서가 보장되지않아.

//folder
fs.mkdir("sub-folder").catch(console.error);

fs.readdir("./").then(console.log).catch(console.error);

//인자는 뭐가 있고, 리턴되는 값은 뭐고. 이런거는 공식문서를 보는게 좋다.
