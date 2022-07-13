/*
time: O(N)
space: O(N)
*/


var isValid = function(s) {
    let map = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    if(s.length % 2 === 1)return false;
    let stack = [];
    for(let i = 0; i < s.length; i++){
        let curChar = s[i];
        if(stack.length){
            if(map[curChar] === stack[stack.length-1])stack.pop();
            else stack.push(curChar);
        }else stack.push(curChar);
    }
    console.log(stack)
    return stack.length === 0 ? true : false;  
};