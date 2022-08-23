var findMin = function (nums) {
    if(nums[0] < nums[nums.length - 1])return nums[0];
    if (nums.length === 1) return nums[0];

    let l = 0;
    let r = nums.length - 1;
    while(l<r){
        let mid = l + Math.floor((r-l)/2);
        if(nums[mid] > nums[mid + 1])return nums[mid + 1];
        else if(nums[l] < nums[mid]) l = mid;
        else r = mid;
    }
    return -1;
}