/*
map:

3: 0
4: 1
[3,2,4], 
     ^
     return [1,2]
target = 6
































I: int array, int target
O: 더했을때 타겟되는 인덱스 두개
C:
2 <= nums.length <= 10^4
-10^9 <= nums[i] <= 10^9
-10^9 <= target <= 10^9
Only one valid answer exists.

E:
if(array.length === 2)return [0,1];

ds:hash map
algo:x

solution:
for
    -if(map[현재값] >= 0)return [맵값, 현재인덱스]
    -필요한 값 = 타겟 - 현재값;
    -map[필요한값] = 현재 인덱스;

return [];

time: O(N)
space: O(N)

Input: nums = [2,7,11,15], target = 9
                 ^
7 : 0

*/

var twoSum = function(nums, target) {
  if(nums.length === 2)return [0,1];
    
  let map = new Map();

  for(let i = 0; i < nums.length; i++){
    let curNum = nums[i];
    if(map.get(curNum) >= 0)return [map.get(curNum),i];
    let needNum = target - curNum;
    map.set(needNum,i);
  }
  return [];
};