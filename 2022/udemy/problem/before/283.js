/*
[`1,3,12,0,0]
            ^
            ^ 
\*/
var moveZeroes = function(nums) {
    if(nums.length === 1)return nums;
    
    let l = 0;
    let r = 1;

    while(l < nums.length){
        if(nums[l] === 0){
            while(r < nums.length){
                if(nums[r] !== 0){
                    let t = nums[l];
                    nums[l] = nums[r];
                    nums[r] = t;
                    break;
                }
                r++;
            }
        }
        l++;
        r = l+1;
    }

};
