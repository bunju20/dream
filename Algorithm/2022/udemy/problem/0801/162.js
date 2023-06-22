var findPeakElement = function (nums) {
    if(nums.length === 1)return 0;
    let l = 0;
    let r = nums.length - 1;

    while(l < r){
        let mid = l + Math.floor((r-l)/2);
        if(nums[mid] < nums[mid+1]) l = mid + 1;
        else r = mid;
    }
    return l;
}