var searchRange = function(nums, target) {
    let l = 0, r = nums.length-1, mid;
    
    while(l <= r) {
        mid = l + Math.floor((r-l)/2);
        if(nums[mid] >= target) r = mid-1;
        else l = mid+1;
    }
    
    if(nums[l] !== target) return [-1, -1];
    
    const start = l;
    l = 0, r = nums.length-1;

    while(l <= r) {
        mid = l + Math.floor((r-l)/2);
        if(nums[mid] <= target) l = mid+1;
        else r = mid-1;
    }
    return [start, r];
};