/*
1:37~

I: 배열
O: <= => ...하게 정렬된 배열
C:
1 <= nums.length <= 5 * 104
0 <= nums[i] <= 104
It is guaranteed that there will be an answer for the given input nums.

E:if(nums.length === 1)return 원래배열

[3,5,1,6,2,4]
         ^ ^
신경쓸 필요없는듯?
어짜피 두개만 비교하면 되잖아.

time: O(N)
space: O(N)
*/

var wiggleSort = function (nums) {
  //min = false
  //max = true;
  let oper = false;

  for (let i = 0; i < nums.length - 1; i++) {
    if (!oper) {
      if (nums[i] > nums[i + 1]) swap(nums, i);
    } else {
      if (nums[i] < nums[i + 1]) swap(nums, i);
    }
    oper = !oper;
  }

  return nums;
};

function swap(ar, i) {
  let t = ar[i];
  ar[i] = ar[i + 1];
  ar[i + 1] = t;
}