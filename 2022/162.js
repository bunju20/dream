/*
Solution:

-while(l<r)
    -mid;
    -if(nums[mid] > nums[mid + 1]) r = mid
    -else l = mid + 1
-return l;

time: O(logN)
space: O(1)

*
맨앞도 맨 뒤도 peek가 될수 있음, 그러니까 l과 r의 범위를 계속 좁히고
둘이 같아졌을때 반환하면 됨.
mid하고 mid+1을 보고 오름차순이면 l를 이동, 반대면 r을 이동해서 문제를 푼다.

*/

var findPeakElement = function (nums) {
  if (nums.length === 1) return 0;
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);
    if (nums[mid] < nums[mid + 1]) l = mid + 1;
    else r = mid;
  }
  return l;
};

/*
1:16~ 39
I: 배열
O: peek가 존재하는 index
C:
1 <= nums.length <= 1000
-231 <= nums[i] <= 231 - 1
nums[i] != nums[i + 1] for all valid i.

E:
if(nums.length === 1)return 0;

왼쪽 < mid && 오른쪽 < mid
[1,2,6,3,5,6,4]
       m
^
              ^
Output: 5

ds: x
algo: x

solution: brute
time: O(N)
space:O(1)


var findPeakElement = function (nums) {
  if (nums.length === 1) return 0;
  if (nums[0] > nums[1]) return 0;
  if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) return i;
  }
  return -1;
};

*/