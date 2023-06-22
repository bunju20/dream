/*
time O(nCk)
*/

var combine = function (n, k) {
    if (n == 1 && k == 1) return [[1]];
    let result = [];

    dfs([], 1, result , k, n);
    return result;
};

function dfs(cur,idx,result,k,n){
    if(cur.length === k)result.push([...cur]);
    for(let i = idx; i <= n; i++){
        cur.push(i);
        dfs(cur,i+1,result,k,n);
        cur.pop();
    }
}
