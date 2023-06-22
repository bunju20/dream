/*
10: 20 ~ 10 : 28
I: rotated array(오름차순 정렬)
O: 가장 작은 int
C: 
n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
All the integers of nums are unique.
nums is sorted and rotated between 1 and n times.
E:
if(n === 1)return num[0];

ds: x
algo: binary search

Input: nums = [3,4,5,1,2]
Output: 1
어긋나는 부분을 찾으면 됨.

-l,r
-while(l<r)
    -mid
    -if(mid값 > mid + 1)return  mid + 1값
    -if(l~mid정렬되어있으면) l = mid;
    -else r = mid
-retunr -1

배열의 크기 : N
time: O(logN)
space: O(1)
*/

var findMin = function (nums) {
  if (nums[0] < nums[nums.length - 1]) return nums[0];
  if (nums.length === 1) return nums[0];

  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);
    if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
    else if (nums[l] < nums[mid]) l = mid;
    else r = mid;
  }
  return -1;
};