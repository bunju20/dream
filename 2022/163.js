/*
I: 배열, 범위
O: string배열
C:
-109 <= lower <= upper <= 109
0 <= nums.length <= 100
lower <= nums[i] <= upper
All the values of nums are unique.
E: x

algo: x
solution:

- for(배열길이)
    - [l+1, r-1] 구함
    - 위의 범위가 가능한 범위인지 함수로 확인 -> 되는애면 result에 푸시
- for(result)
    -범위로 string만들어서 strArr에 푸시
return strArr;

배열의 길이
time: O(N)
space: O(N)

*/

var findMissingRanges = function (nums, lower, upper) {
  let result = [];
  let strArr = [];
  for (let i = -1; i < nums.length; i++) {
    let curRange;

    if (nums.length === 0) curRange = [lower, upper];
    else if (i === -1) curRange = [lower, nums[0] - 1];
    else if (i === nums.length - 1) curRange = [nums[i] + 1, upper];
    else curRange = [nums[i] + 1, nums[i + 1] - 1];

    if (check(curRange, lower, upper)) {
      result.push(curRange);
    }
  }
  for (let i = 0; i < result.length; i++) {
    let curStr = "";
    let curRan = result[i];
    if (curRan[0] === curRan[1]) curStr += curRan[0];
    else {
      curStr = curRan[0] + "->" + curRan[1];
    }
    strArr.push(curStr);
  }
  return strArr;
};

function check(curRange, lower, upper) {
  if (
    curRange[0] <= curRange[1] &&
    curRange[0] >= lower &&
    curRange[1] <= upper
  )
    return true;
  return false;
}