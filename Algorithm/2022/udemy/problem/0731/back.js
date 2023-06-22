/*

*/

var combine = function (n, k) {
    if (n == 1 && k == 1) return [[1]];
    let out = [];

    dfs([], 1, out , k, n);
    return out;
};

function dfs(cur,idx,result,k,n){
    if(cur.length === k)result.push([...cur]);
    for(let i = idx; i <= n; i++){
        cur.push(i);
        dfs(cur,i+1,result,k,n);
        cur.pop();
    }
}
