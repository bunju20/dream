/*
I: 배열 두개, 삭제할 노드의 수
O: 삭제할 노드의 모음 배열
C:
n == pid.length
n == ppid.length
1 <= n <= 5 * 104
1 <= pid[i] <= 5 * 104
0 <= ppid[i] <= 5 * 104
Only one process has no parent.
All the values of pid are unique.
kill is guaranteed to be in pid.
E:
x

ds: Hash map
algo:dfs

solution:
-ppid로 맵을 만들고 (값, 그 인덱스)
-end노드 (ppid가 0인 값을 받아오고)
-return result

dfs(찾는 수)
-if(end노드면)return;
-result에 수 푸시
-map에서 찾는 수의 idx를 받아오고
-그걸로 다시 dfs돌림

time: O(N)
space:O(N)

*/

var killProcess = function(pid, ppid, kill) {
    let map = {};
    let result = [];
    let endNum = 0;

    for(let i = 0; i < ppid.length; i++){
        if(ppid[i] === 0)endNum = i;
        if(map[ppid[i]]) map[ppid[i]].push(i);
        else map[ppid[i]] = [i];
    }//맵 만들고, endNum Idx받고

    if(pid[endNum] === kill)return pid;
    result.push(kill);
    dfs(kill,result,map,pid);
    return result;

};

function dfs(curNum,result,map,pid){
    let childrenIdx = map[curNum];

    if(!map[curNum])return;
    for(let childIdx of childrenIdx){
        result.push(pid[childIdx]);
        dfs(pid[childIdx],result,map,pid)
    }

}
