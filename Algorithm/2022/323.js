/*
배열주고 그룹구하는 문제

아예... 그래프를 다시 만들어서 dfs돌리기

edge배열의 길이: N
Time: O(N)
Space: O(N)
*/

var countComponents = function (n, edges) {
  let visited = [];
  let graph = buildGraph(n, edges);
  let res = 0;

  for (let i = 0; i < n; i++) {
    visited.push(false);
  }

  for (let i = 0; i < n; i++) {
    if (visited[i] === false) {
      res++;
      dfs(i, graph, visited);
    }
  }
  return res;
};

const buildGraph = (n, edges) => {
  let graph = Array.from({ length: n }, () => []);

  for (let edge of edges) {
    let [src, dist] = edge;
    graph[src].push(dist);
    graph[dist].push(src);
  }
  return graph;
};

const dfs = (index, graph, visited) => {
  visited[index] = true;
  let nodes = graph[index];
  for (let i = 0; i < nodes.length; i++) {
    if (visited[nodes[i]] === false) {
      dfs(nodes[i], graph, visited);
    }
  }
};