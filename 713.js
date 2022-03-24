/*
solution:
time:
space:

*/

var numSubarrayProductLessThanK = function (nums, k) {
  let res = 0,
    count = 0,
    prod = 1;
  let left = 0,
    right = 0;

  while (right < nums.length) {
    prod *= nums[right];
    count++;
    while (count && prod >= k) {
      prod /= nums[left];
      count--;
      left++;
    }
    if (prod < k) res += count;
    right++;
  }
  return res;
};