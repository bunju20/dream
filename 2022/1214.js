/*
solution:

inorder로 돌면서 정렬된 배열 받아오고.
젤 작은 값이랑 큰 값으로 false정하고

타겟에서 뺀 값으로 map만들고
2번째 배열 돌면서 map의 key 해당하는 값 있으면 true 없으면 false
*/

var twoSumBSTs = function(root1, root2, target) {

  const tree1 = [], tree2 = [];
  inorder(root1, tree1);
  inorder(root2, tree2);
  
  if ((target < tree1[0] + tree2[0]) ||  // less that minimum sum
      (target > tree1[tree1.length - 1] + tree2[tree2.length - 1])) // greater than maximum sum
    return false;
  
  // Two sum
  const s = new Set(tree1.map(v => target - v));
  return tree2.some(v => s.has(v));
};

function inorder(root,tree){
    if (!root) return;
    inorder(root.left, tree);
    tree.push(root.val);
    inorder(root.right, tree);
}