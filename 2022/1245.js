/*
I:
O:
C:
E:

ds:
algo:
solution:

0:1
1:2,4
2:3
4:5

한 노드당 이어져있을수 있는 노드 갯수 구하고 최대 노드갯수 - 1반환하면 됨.

*/

var treeDiameter = function(edges) {
    const store = {};
    edges.forEach(([a, b]) => {
      if (store[a]) store[a].push(b);
      else store[a] = [b];
      if (store[b]) store[b].push(a);
      else store[b] = [a];
    });
    let res = 0;
    const seen = new Set();
  
  
    dfs(0,seen,store,res);
    return res - 1;
  };

  function dfs(node,seen,store,res){
    seen.add(node);

    let [first, second] = [0, 0];
    for (let child of store[node]) {
      if (seen.has(child)) continue;
      const pathLength = dfs(child,seen,store,res);
      if (pathLength > first) {
        second = first;
        first = pathLength;
      } else if (pathLength <= first && pathLength > second)
        second = pathLength;
    }
    res = Math.max(res, first + second + 1);
    return 1 + first;
  };