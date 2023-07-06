const path = require("path");
console.log(__dirname); //디렉토리 이름
console.log(__filename); //파일 이름

// 운영체제마다 경로 표현법이 달라서, 어딜가든 path가 잘 작동하게 해야함.
console.log(path.sep); //경로 구분자
console.log(path.delimiter); //환경변수 구분자

// basename
console.log(path.basename(__filename)); //파일 이름
console.log(path.basename(__filename, ".js")); //확장자 제거
console.log(path.dirname(__filename)); //디렉토리 이름
console.log(path.extname(__filename)); //확장자 이름

// parse
const parsed = path.parse(__filename);
console.log(parsed);

// format
const str = path.format(parsed);
console.log(str);

// isAbsolute
console.log("isAbsolute?", path.isAbsolute(__dirname)); //절대경로인지 아닌지
console.log("isAbsolute?", path.isAbsolute("../"));

// normalize
console.log(path.normalize("./folder/////sub")); //잘못된 경로를 바로잡아줌

// join
console.log(__dirname + path.sep + "image"); //이렇게 하면 운영체제마다 다르게 표현됨
console.log(path.join(__dirname, "image")); //이렇게 개선해서 사용해라.
