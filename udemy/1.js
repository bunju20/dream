/*
수의 합을 더하는

1.==================
function add(n){
    let total = 0;
    for(let i = 1; i <= n; i++){
        total+=i;
    }
    return total;
}

2.===================
function add(n){
    return n*(n+1) / 2;
}
*/
function add(n){
    return n*(n+1) / 2;
}
let t1 = performance.now();
add(10000000000);
let t2 = performance.now();
console.log(`Time ${(t2-t1)/1000} seconds`);

// 이걸통해서 어느것이 시간이 적게 드는지 판단 가능.
// 측정하는게 나쁜건아닌데...시간이 오래걸리잖아. 이런걸 하지 않더라도 코드를 비교하는 값이 존재함.