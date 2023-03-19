/*
I: 이진트리
O: leaf 노드들 그룹지은 배열 반환
C:
 E:

ds:
algo:

solution:
main:
-배열 만들고
-dfs
-return 배열

dfs:
-if(null) -1;
-left, right height받아옴
-curHeight 구함. max(왼,오) + 1;
-if(없으면 배열 만들어주고)
-해당 인덱스에 푸시함
-return curHeight;

time: O(N)
space: O(N)
*/

var findLeaves = function (root) {
  const res = [];

  dfs(root, res);

  return res;
};

  function dfs(node, res) {
    if (node == null) return -1;

    const leftHeight = dfs(node.left, res);
    const rightHeight = dfs(node.right, res);

    const currHeight = Math.max(leftHeight, rightHeight) + 1;

    if (!res[currHeight]) res[currHeight] = [];
    res[currHeight].push(node.val);
    return currHeight;
  }