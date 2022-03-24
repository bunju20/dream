/*
max = 1
[1,8,6,2,5,4,8,3,7]
 ^
                 ^
=> 두개의 포인터중에
더 짧은 쪽을 이동시킴 -> 더 긴쪽을 이동시켜 봤자 높이가 제한되어있어서 할필요가 없음.
둘이 만날떄까지 이동시키면서 최대를 갱신을 해주면 됨.


*/

var maxArea = function (height) {
  if (height.length === 2) return Math.min(height[0], height[1]);

  let l = 0;
  let r = height.length - 1;
  let max = -Infinity;

  while (l < r) {
    let curAmount = (r - l) * Math.min(height[l], height[r]);
    max = Math.max(max, curAmount);
    if (height[l] < height[r]) l++;
    else r--;
  }
  return max;
};