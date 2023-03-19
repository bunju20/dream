/*
I: tree 2개
O: 병합된 tree
C:
The number of nodes in both trees is in the range [0, 2000].
-10^4 <= Node.val <= 10^4
E:
if(노드 둘다 널이면)return root1;
if(하나면 널이면)return 널 아닌거

ds: x
algo: dfs

solution:
if(둘중 하나 널이면)안널인거 반환하시고

root = 두개 값 더한거 tree만듦
left = dfs left
right = dfs right;

root.left = left
root.right = right

return root;


N : tree의 크기
time: O(N)
space: O(N)

*/


var mergeTrees = function(root1, root2) {
    if(!root1 || !root2) return root1 || root2;
    let curNode = new TreeNode(root1.val + root2.val);
    let left = mergeTrees(root1.left,root2.left);
    let right = mergeTrees(root1.right,root2.right);

    curNode.left = left;
    curNode.right = right;

    return curNode;

}