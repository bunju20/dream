/*
I: treenode
O: 단일 트리의 갯수
C: 
The number of the node in the tree will be in the range [0, 1000].
-1000 <= Node.val <= 1000

E:if(!root)return 0;

ds:
algo: DFS

solution:
count 변수
dfs:
-if(현재노드 null)return true;
-left
-right
-if(l하고 r중에 false가 있든지 아니면 l하고 r하고 현재 노드가 다르든지 하면)return false;
- count++;
- return true;

노드의 갯수 : N
time: O(N)
space: O(N)

*/

var countUnivalSubtrees = function (root) {
  let count = [0];

  findAllSubTrees(root, count);
  return count[0];

};

  function findAllSubTrees(node, count) {
    if (node == null) return true;

    const left = findAllSubTrees(node.left, count);
    const right = findAllSubTrees(node.right, count);

    if (!left || !right) return false;
    if (node.left != null && node.left.val != node.val) return false;
    if (node.right != null && node.right.val != node.val) return false;

    count[0]++;
    return true;
  }