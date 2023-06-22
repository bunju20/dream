/*
그냥 받아서
우리가 삭제해야하는애들보다 작은 범위면 넣구
왼쪽이 더 크면은 오른족은 왼쪽으로 대체해서 넣고
오른쪽이 더 크면 왼쪽을 오른쪽으로 대체해서 넣고 반환함.

time: O(N)
space: O(1)
*/

var removeInterval = function (intervals, toBeRemoved) {
  const [left, right] = toBeRemoved;
  const res = [];
  for (let [l, r] of intervals) {
    if (r <= left || l >= right) {
      res.push([l, r]);
      continue;
    }
    if (l < left) {
      res.push([l, left]);
    }
    if (r > right) {
      res.push([right, r]);
    }
  }
  return res;
};