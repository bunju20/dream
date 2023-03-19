/*
I: int array
O: taget의 index or -1
C:
1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
E: if(nums.length === 1)target이면 0 아니면 -1

ds: x
algo: x
solution:
-l,r
-while(l<=r)
    -let mid
    -if(taget === mid)return mid idx
    -else if(mid < taget)l = mid + 1
    -else r = mid - 1;
return -1;

time: O(logN)
space: O(1)

*/

var search = function(nums, target) {
    let l = 0, r = nums.length - 1;
    while(l <= r){
        let mid = l + Math.floor( (r - l) / 2);
        if(nums[mid] === target)return mid;
        else if(nums[mid] < target) l = mid + 1;
        else r = mid - 1;
    }
    return -1;
}