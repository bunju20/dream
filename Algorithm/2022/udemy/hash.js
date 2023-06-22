/*
1. pink를 숫자로 변환하는 방법?
한글자씩 더해서 원하는 크기만큼으로 나누든지 한다.

*/ 

console.log("a".charCodeAt(0) - 96);
let str = "sadw";

let sum = 0;
for(let i = 0; i < str.length; i++){
    sum += str[i].charCodeAt(0) - 96;
}
sum = sum % 8;
console.log(sum); //이러면 해쉬가 충돌할수 있어서 상수시간이라고 하기에 애매함.





