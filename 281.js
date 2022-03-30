var ZigzagIterator = function ZigzagIterator(v1, v2) {
    this.queue = [];
    
    if (v1 && v1.length > 0) {
        this.queue.push([v1, 0]); 
    }
    if (v2 && v2.length > 0) {
        this.queue.push([v2, 0]); 
    }
};


ZigzagIterator.prototype.hasNext = function hasNext() {
    return this.queue.length > 0;
};


ZigzagIterator.prototype.next = function next() {
    var [v, pos] = this.queue.shift(),
        result = v[pos];
    pos++;
    if (pos < v.length) {
        this.queue.push([v, pos]);
    }
    
    return result;
};