/*
12:20~ 12:

I: 오름차순으로 정렬된 int array
O: [숫자가 시작하는 인덱스, 끝나는 인덱스], 없으면 [-1,-1]
C:
0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109

E:
if(nums.length === 0)return [-1,-1];
if(target < nums[0] || target > nums[nums.length - 1])return [-1,-1];

ds: x
algo: binary search

Input: nums = [5,7,7,8,8,10], 
                   ^ ^      - 1
                        ^ ^ - 2
 
target = 8
Output: [3,4]

solution:
//edge case

main :
- while(l,r)
    - mid;
    - if(왼 !== 타겟 && 오른 === 타겟) result[0] = 오른;
    - else if(오른 >= 타겟) r = mid - 1;
    - else if(오른 < 타겟) l =  mid + 1;

- while 왼(타겟) 오른(타겟아닌)
...

-return result[0] === -1 ? [-1,-1] : result;

배열의 크기 : N
time: O(2N) => O(N)
space: O(1)

- 내 풀이
var searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1];
  if (target < nums[0] || target > nums[nums.length - 1]) return [-1, -1];

  const result = [-1, -1];
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if ((mid === 0 || nums[mid - 1] !== target) && nums[mid] === target) {
      result[0] = mid;
      break;
    } else if (nums[mid] >= target) r = mid - 1;
    else if (nums[mid] < target) l = mid + 1;
  }

  l = 0;
  r = nums.length - 1;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (nums[mid] === target &&(mid === nums.length - 1 || nums[mid + 1] !== target)) {
    result[1] = mid;
      break;
    } else if (nums[mid] > target) r = mid - 1;
    else if (nums[mid] <= target) l = mid + 1;
  }

  return result;
};

*/

/*

binary Search
정렬된 배열, int target) target의 [시작Idx, 끝Idx]를 반환

시작Idx - (mid-1)!==타겟 && (mid) === 타겟일떄의 mid
끝Idx - (mid) === 타겟 && (mid+1) !== 타겟일떄의 mid
* mid자체가 타겟일때는 어떤 조건에 넣어야하는지 주의

*/
var searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1];
  if (target < nums[0] || target > nums[nums.length - 1]) return [-1, -1];

  const result = [-1, -1];
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if ((mid === 0 || nums[mid - 1] !== target) && nums[mid] === target) {
      result[0] = mid;
      break;
    } else if (nums[mid] >= target) r = mid - 1;
    else if (nums[mid] < target) l = mid + 1;
  }

  l = 0;
  r = nums.length - 1;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (
      nums[mid] === target &&
      (mid === nums.length - 1 || nums[mid + 1] !== target)
    ) {
      result[1] = mid;
      break;
    } else if (nums[mid] > target) r = mid - 1;
    else if (nums[mid] <= target) l = mid + 1;
  }

  return result;
};