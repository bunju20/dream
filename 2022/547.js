/*
solution:
main
- for(배열만큼)
    - if(1이고 visited안한애면)
        -dfs
        -count++

dfs curNode

-visited 표시.
-for(curNode)
    - if(자기자신보다 뒤에 1이고 걔가 visited안한애면)dfs;


time: O(N)
space:O(N)

*/


var findCircleNum = function (isConnected) {
  let visited = new Array(isConnected.length).fill(0);
  let count = 0;
  for (let i = 0; i < isConnected.length; i++) {
    if (!visited[i]) {
      dfs(isConnected, i, visited);
      count++;
    }
  }
  return count;
};

function dfs(ar, curIdx, visited) {
  let curNode = ar[curIdx];
  visited[curIdx] = 1;

  for (let i = 0; i < curNode.length; i++) {
    if (curIdx !== i && curNode[i] === 1 && !visited[i]) dfs(ar, i, visited);
  }
  return;
}