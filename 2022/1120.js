/*

I: 이진트리
O: 하위트리의 최대 평균 값
C:

The number of nodes in the tree is in the range [1, 10^4].
0 <= Node.val <= 10^5
E:
if(node가 하나면)return 그 노드의 값

ds: x
algo: dfs
solution:
//edge case
let max = [평균]

dfs:(curNode)
-


time: O(N)
space: O(N)

*/

function maximumAverageSubtree(root) {

    return go(root).maxAvg;
  }

function go(node) {
   if (node == null) return { sum: 0, count: 0, maxAvg: 0 };

   const l = go(node.left);
   const r = go(node.right);

   const sum = l.sum + r.sum + node.val;
   const count = l.count + r.count + 1;
   const maxAvg = Math.max(l.maxAvg, r.maxAvg, sum  / count);
   return { sum, count, maxAvg };
 }
