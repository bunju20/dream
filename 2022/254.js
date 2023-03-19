/*
I: int n
O: 곱해서 n이 나올수 있는 2이상의 조합들
C: 1 <= n <= 107
E:if(n === 1)return []

12: [2,6],[3,4] 
6:[2,3]
4:[2,2]

ds: map
algo: x
solution:
-map만들어주고
-makeMap돌리고
-for(map)
    -현재 값 res에 넣고
    -if(오른쪽 친구가 map에 있으면)
        -그 친구들 포함한 값으로 res에 넣음.
-return res;


makeMap
-if(visted한놈이면)return;
-for(2~절반 전까지)
    -if(본애면 break;)
    -l,r
    -map에다가 넣어주고
    -if(y가 나눠지는 놈이면)recursion


time: O(N)
space: O(N)
*/

var getFactors = function (n) {
    if(n === 1)return [];

    let map = {};
    let visited = new Array(n).fill(false);
    let result = [];
    makeMap(map, n, visited);

    let ar = map[n];
    for(let [left,right] of ar){
        result.push([left,right]);
        dfs(map, right, result,[left]);
    }
    return result;

};

function makeMap(map, curNum, visited) {
    if(visited[curNum])return;
    visited[curNum] = true;

    for(let i = 2; i < n/2 + 1; i++){
        let left = i;
        let rigth = curNum/i;
        if(rigth !== Math.floor(rigth))continue;

        if(curNum in map)map[curNum].push(left,rigth);
        else map[curNum] = [[left,rigth]];
        makeMap(map,rigth,visited);
    }
}

function dfs(map,curNum,result,curAr){
    curAr.push(curNum);
    let ar = [...curAr];
    result.push(ar);
    if(curNum in map){
        let nums = map[curNum];
        for(let i = 0; i < nums.length; i++){
            let l = nums[i][0];
            let r = nums[i][1];
            dfs(map, r, result, curAr);
        }
    }
}