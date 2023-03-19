/*
I: int array
O: boolean
C:
1 <= nums.length <= 1000
1 <= nums[i], target <= 109
nums is sorted in non-decreasing order.

E: if(nums.length === 1)return false;

ds: x
algo: binary search
solution:
왼쪽에서 타겟시작하는거 찾고
오른쪽에서 찾고
인덱스 확인
time: O(logN)
space:O(1)

*/

var isMajorityElement = function(nums, target) {
    let l = 0, r = nums.length - 1;
    
    while(l < r){
        let mid = l + Math.floor((r - l)/2);
        if(nums[mid] < target)l = mid + 1;
        else r = mid - 1;
    }
    let lIdx = nums[l] === target ? l : l + 1;

    l = 0;
    r = nums.length - 1;

    while(l < r){
        let mid = l + Math.floor((r - l)/2);
        if(nums[mid] > target)r = mid - 1;
        else l = mid + 1;
    }
    let rIdx = nums[l] === target ? l : l-1;
    if(rIdx - lIdx + 1 > Math.floor(nums.length/2))return true;
    return false;
    
};

