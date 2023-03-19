/*
I: 배열두개(b가 a의 애너그램)
O: 순서 인덱스 배열
C: 
1 <= nums1.length <= 100
nums2.length == nums1.length
0 <= nums1[i], nums2[i] <= 105
nums2 is an anagram of nums1.
E:
if(두개의 길이가 1이면)return [0];

[12,28,46,32,50]
 ^
[50,12,32,46,28]
               ^
O(N)
O(N) 
Output: [1,4,3,2,0]

ds: map
algo: x
solution:
- 배열 2 돌면서 맵안에 넣어놓고
- 베열 1돌면서 맵안에 있는거 push하고
- return res;

time: O(N)
space: O(N)
*/


var anagramMappings = function(nums1, nums2) {
  if(nums1.length === 1 && nums2.length === 1)return [0];
  let map = {};
  let res = [];
  
  for(let i = 0; i < nums2.length; i++)map[nums2[i]] = i;
  for(let i = 0; i < nums1.length; i++){
      let curNum = nums1[i];
      res.push(map[curNum]);
  }
  return res;
};
