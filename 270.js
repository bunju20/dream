/*
타겟이랑 가장 가까운 값 반환.
그냥 둘의 차이값으로 close계속 갱신해주면 될듯?
 
solution:

time: O(H)
space: O(H)

*/

var closestValue = function (root, target) {
  let closestDiff = Infinity;
  let closestVal = Infinity;

  const search = (node) => {
    if (!node) return;

    if (Math.abs(node.val - target) < closestDiff) {
      closestDiff = Math.abs(node.val - target);
      closestVal = node.val;
    }

    if (target < node.val) {
      search(node.left);
    } else {
      search(node.right);
    }
  };

  search(root);

  return closestVal;
};