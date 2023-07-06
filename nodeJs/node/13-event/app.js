const EventEmitter = require("events");

const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log("first callback - ", args);
};

emitter.on("ellie", callback1);
emitter.on("ellie", (arg) => {
  console.log("first callback - ", arg);
});

//이걸로 이벤트 발생시킨다.
emitter.emit("ellie", { message: 1 });
emitter.emit("ellie", { message: 2 });
emitter.removeListener("ellie", callback1);
//제거하고 나서는 첫번째 콜백이 안나오는거지.
//전부다 지우면 세번째 콜백은 둘다 안나온다.
emitter.emit("ellie", { message: 3 });
//이벤트를 발생시키면, 이벤트 리스너가 실행된다.
//위의 콜백함수에서 데이터에 접근할수 있다.
