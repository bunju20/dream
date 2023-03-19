/*
배열을 사용해서 큐를 만들기
pop과 shift를 이용함.
=> 쉬프트 할떄마다 시간복잡도 발생.

unshift pop
push랑 shift 조합이 존재.
=> 성능을 신경쓰려면 큐 클래스를 만들어야함
*/

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
    }
    dequeue(){
        if(!this.first)return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

let q = new Queue();
q.enqueue("ydd");
q.enqueue("1");
q.enqueue("2");
console.log(q);