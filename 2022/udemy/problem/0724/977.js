/*
I: int array
O: 정렬되어있는 int ^ 2 배열
C:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
E:
if(nums.length === 1)return 제곱해서 배열 반환

[0,-1,3,-4,10]
            ^
             ^
ds:
algo: two pointer
solution:
-l , r

time:O(N)
space:O(N)

*/
var sortedSquares = function(nums) {
    let result = [];
    let l = 0;
    let r = nums.length - 1;
    let p = r;

    while (l <= r) {
        let left = nums[l] ** 2;
        let right = nums[r] ** 2;
        if (left > right) {
            result[p--] = left; l++;
        } else {
            result[p--] = right; r--;
        }
    }
    return result;
};