const process = require("process");

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

//얘는 밑에 있는 애랑 다른거다.
setTimeout(() => {
  console.log("setTimeout");
}, 0);

//얘는 테스트 큐 맨 앞에 넣어지는 애.
process.nextTick(() => {
  console.log("nextTick");
});

for (let i = 0; i < 100; i++) {
  //이란 무거운일은 여기서 하믄 안된다.
  console.log("for loop");
}
