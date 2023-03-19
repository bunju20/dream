/*

ds: x
algo: sliding window
solution:

time: O(N)
space: O(N)
*/

var MovingAverage = function(size) {
    this.size = size;
    this.q = [];
};

MovingAverage.prototype.next = function(val) {
    this.q.push(val);
    while (this.q.length > this.size) this.q.shift(); //O(N)
    let curLen = Math.min(this.size, this.q.length);
    let curVal = 0;
    this.q.map(a => curVal += a);
    return curVal / curLen;
};


/*
To my big surprise, I've learned that leetcode already comes with queue/priority queue data structures.
https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages-

https://github.com/datastructures-js/queue/blob/master/src/queue.js

So in the code below I will be using that Queue

var MovingAverage = function(size) {
    this.queue = new Queue()
    this.size = size
    this.sum = 0
};

 MovingAverage.prototype.next = function(val) {
    if (this.queue.size() >= this.size) {
        this.sum = this.sum - this.queue.dequeue()
    }
    this.queue.enqueue(val)
    this.sum = this.sum + val
    return this.sum / this.queue.size()
};
*/