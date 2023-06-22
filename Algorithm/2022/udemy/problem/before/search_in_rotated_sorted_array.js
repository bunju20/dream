/*

*/
var search = function (nums, target) {
    if (nums.length === 1) return nums[0] === target ? 0 : -1;

    let l = 0;
    let r = nums.length - 1;

    while(l < r){
        let mid = l + Math.floor((r-l)/2);
        if(nums[mid] === target)return mid;
        let sorted = nums[l] <= nums[mid];
        if(sorted){
            if(nums[l] <= target && nums[mid] > target) r = mid - 1;
            else l = mid + 1;
        }else{
            if(nums[mid] < target && nums[r] >= target) l = mid + 1;
            else r = mid - 1;
        }
    }

    return (nums[r] === target) ? r : -1;
}