/*
input: 5
f(0) = 0
f(1) = 1;

f(4) + f(3)
f(3) + f(2) + f(2) + f(1)
f(2) + f(1) + f(1) + f(0) ...
f(n) = f(n-1) + f(n-2);

time: O(2^N)
space: O(N) //call stack

*/
var fib = function(n,dir) {
    console.log(`f(${n}) : ${dir}`);
    if(n === 0)return 0;
    if(n === 1)return 1;
    
     return fib(n-1,'left') + fib(n-2,'right');   

};


console.log(fib(5));

/*
f(5) : undefined
f(4) : left
f(3) : left
f(2) : left
f(1) : left
f(0) : right
f(1) : right
f(2) : right
f(1) : left
f(0) : right
f(3) : right
f(2) : left
f(1) : left
f(0) : right
f(1) : right
*/