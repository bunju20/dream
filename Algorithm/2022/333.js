/*
I: 이진트리
O:  가장 큰 bst의 노드갯수(노드의 갯수가 가장 많은 bst)
C:
The number of nodes in the tree is in the range [0, 104].
-104 <= Node.val <= 104
E:
if(root === null)return 0;

ds: x
algo:  DFS
soution:
bst가 true일때마다 노드의 개수를 젤 큰걸로 갱신해주면 됨.

dfs
- if(!root) return [0개, min, max];
- left, right 받아옴.
- if(왼쪽에서 젤  큰애가 val보다 크면 && 오른쪽... && 그 전에게 false였으면){
    return [-1,dma,dma] //false 판단용
}
- 현재 size구하고 max 갱신하고
- return [현재값, 갱신, 갱신]

*
한 노드가 가지고 가야할 정보가 여태까지의 노드수, 가장 작은 값,큰값

time: O(N)
space: O(N)

*/

var largestBSTSubtree = function (root) {
  if (!root) return 0;

  let maxCount = [0];
  dfs(root, maxCount);
  return maxCount[0];
};

function dfs(root, maxCount) {
  if (!root) {
    //return(size, min, max)
    return [0, Infinity, -Infinity];
  }

  let [lCount, lmin, lmax] = dfs(root.left, maxCount);
  let [rCount, rmin, rmax] = dfs(root.right, maxCount);

  if (root.val <= lmax || root.val >= rmin || lCount === -1 || rCount === -1) {
    return [-1, Infinity, -Infinity];
  }

  let currentSize = lCount + rCount + 1;
  maxCount[0] = Math.max(maxCount[0], currentSize);

  return [currentSize, Math.min(root.val, lmin), Math.max(root.val, rmax)];
}