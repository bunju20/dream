/*
solution:

- l , r
- while(l < r)
    - mid;
    - numMissed = mid전에 존재하는 원소의 갯수
    - if(갯수 < k) l 갱신
    - else r갱신
- if(l까지의 원소개수 >= k) 가장 마지막 원소의 바로 앞 값 - (l까지의 원소개수 - k)
- else 가장 마지막 원소 + (k - l까지의 원소개수)

*/

var missingElement = function (nums, k) {
  let l = 0, r = nums.length - 1;

  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);
    const numMissed = nums[mid] - nums[0] - mid; //mid에 전에 있는 숫자들
    if (numMissed < k) l = mid + 1;
    else r = mid;
  }

  const totalMissed = nums[l] - nums[0] - l;
  if (totalMissed >= k) return nums[l] - 1 - (totalMissed - k);
  else return nums[l] + (k - totalMissed);
};

/*
10: 50 ~ 11: 35
I: 정렬된 int 배열
O: k번째로 누락된 수 int
C: 
1 <= nums.length <= 5 * 104
1 <= nums[i] <= 10^7
nums is sorted in ascending order, and all the elements are unique.
1 <= k <= 10^8
E:
if(nums.lenght === 1)return nums[0] + k;

[1,2,4], k = 2

Output: 6
5 => 좁히지만...? 이게.. 좀 빼면서 이것저것 할게 많은...

ds: x
algo: binary search

solution:
//edge처리 해줌.

- l,r
- while(l < r)
    -mid
    -between = l과 mid사이에 존재할수 있는 수의 개수.
    -if(between < k)
        -k -=between;
        -l 갱신
    -else between > k
        -r갱신
- return l에 k더한곳에 있는 값

배열의 크기: N

time: O(logN)
space: O(1)

*/

var missingElement = function (nums, k) {
  if (nums.length === 1) return nums[0] + k;
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);
    let between = nums[mid] - nums[l] - 1 - (mid - l - 1); //사이에 있을수 있는 원소의 개수
    let allNum = nums[r] - nums[l] - 1;

    if (l === r - 1 && allNum < k) return nums[r] + (k - allNum);
    if (l === r - 1) break;

    if (between < k) {
      k -= between;
      l = mid;
    } else r = mid;
  }
  return nums[l] + k;
};




