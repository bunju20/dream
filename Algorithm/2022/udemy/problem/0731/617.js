/*
dfs

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