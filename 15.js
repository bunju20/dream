/*
3:00~
I: int 배열
O: 2d 배열(값 3개씩 들어간)
C:
0 <= nums.length <= 3000
-105 <= nums[i] <= 105
E:
if(nums.length < 3)return [];

-정렬함.
-for(배열길이)
    -if(i === 0|| i값과 i - 1의 값이 다르면) twoSum
-return res;

twoSum
- l, r
- while
    -sum = 세개 더한 값
    -if(sum < 0)l++;
    -else if(sum > 0)r--;
    -else 배열에 세개 넣고, l을 중복되는거 없을때까지 이동.
    
*/

var threeSum = function (nums) {
  if (nums.length < 3) return [];
  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
    if (i === 0 || nums[i - 1] !== nums[i]) twoSum(nums, i, result);
  }
  return result;
};

function twoSum(nums, i, result) {
  let l = i + 1;
  let r = nums.length - 1;
  while (l < r) {
    let sum = nums[i] + nums[l] + nums[r];
    if (sum === 0) {
      result.push([nums[i], nums[l++], nums[r--]]);
      while (l < r && nums[l] === nums[l - 1]) l++;
    } else if (sum > 0) r--;
    else l++;
  }
}