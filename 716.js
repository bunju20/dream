class MaxStack {
    
    constructor() {
        this.stack = []
        this.maxStack = []
    }
    
    push(x) {
        this.stack.push(x)
        if(!this.maxStack.length) this.maxStack.push(x);
        else this.maxStack.push(Math.max(x, this.peekMax()))
    }
    
    pop() {
        this.maxStack.pop()
        return this.stack.pop()
    }
    
    top() {
        return this.stack[this.stack.length-1]
    }
    
    peekMax() {
        return this.maxStack[this.maxStack.length-1]
    }
    
    popMax() {
        const buffer = []
        const max = this.peekMax()
        
        while(this.top() !== max) buffer.push(this.pop())
        this.pop();
        while(buffer.length) this.push(buffer.pop());
        
        return max;
    }
}