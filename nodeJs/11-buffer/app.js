//버퍼: 메모리 덩어리

const fs = require("fs");
const buf = Buffer.from("Hi");
console.log(buf);
//이렇게 추력하면 얘들이 유니코드 형태로 나온다.
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
//배열에 있는 애들한테 접근하면 아스키 코드로 나온다.
console.log(buf.toString()); //이러면 문자열이나오고

//create
const buf2 = Buffer.alloc(2); //2바이트짜리 버퍼를 만들어줘
const buf3 = Buffer.allocUnsafe(2); //초기화를 안해줘서 빠르다. 빈공간에 남아있는 데이터가 들어있을수도있어
buf2[0] = 72;
buf2[1] = 105;
console.log(buf2.toString());
console.log(buf3);
//일단 다 초기화 되어서 나오는데, allocUnsafe는 초기화가 안되어있어서 빠르다.

//concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
