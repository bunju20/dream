/*
solution:
time:
space:

 연속적인 그룹개수 -> sliding window 계산가능.
 [10,5,2,6]
     ^
       ^

  => [10], 1개
  => 50 [5], [10,5] => 2개
  => 10 [2] [5,2]... 
  sliding window의 너비만큼을 계속 더해주면 그게 그룹개수.

  solution
  - while(r<길이)
    - prod*=r의 값
    - count++
    - while(곱 < k) 곱에 왼쪽 나눠주고, l++, count--;
    - res += count
  - r++;

  time:O(N)
  space: O(1)

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