const fs = require("fs");

//rename(...., callback(error, data)) --> 데이터를 받았는지 먼지 알수있다.
//renameSync(....) //동기적으로 실행됨.
//promise.rename().then().catch(0) -> 프로미스 형태로 쓸수 있음.

//일케 없는 놈으로 돌리면 노드가 죽는다.
//오류가 날수 있으면 try catch로 감싸줘야한다.
try {
  //동기적으로 싷행되는놈이라 가급적으로 안쓰는게 좋다.
  fs.renameSync("./file.txt", "./file-new.txt");
  //이러면 파일 이름이 잘 바뀐다.
} catch (error) {
  console.error(error);
}
console.log("hello");

//비동기 적인 방법으로 이름을 바꿔보자.

fs.rename("./file-new.txt", "./file.txt", (error) => {
  console.log(error);
});
console.log("hello");

//이러면 파일이 없으니까 문제가 생긴다 이거임.
fs.promises
  .rename("./text2.txt", "./file-new.txt")
  .then(() => console.log("Done"))
  .catch(console.error);
// 일케 고치니까 정상적으로 돌아가네
//그니까 싱크는 사용하지 말고, 콜백으로 쓰던지 promise로 쓰던지 해라.
