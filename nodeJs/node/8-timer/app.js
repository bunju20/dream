let num = 1;

//얘만 그대로 냅두면 계속 진행한다. 그래서 얘를 변수에담아.

const interval = setInterval(() => {
  console.log(num++);
}, 1000); //1초마다 콜백함수가 실행된다.

setTimeout(() => {
  console.log("Timeout!");
  clearInterval(interval);
}, 6000); //6초가 지나면 interval을 멈추게
