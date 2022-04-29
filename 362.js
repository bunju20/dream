/*
time: O(N)
space: O(N)
*/
var HitCounter = function() {
    this.queue = [];
};

HitCounter.prototype.hit = function(timestamp) { //O(1)
    this.queue.push({
        timestamp
    })
};

HitCounter.prototype.getHits = function(timestamp) {
    let curIdx = 0;
    while(this.queue.length - curIdx > 0 && timestamp - this.queue[curIdx].timestamp >= 300) {
        curIdx++;
    }
    return this.queue.length - curIdx;
};