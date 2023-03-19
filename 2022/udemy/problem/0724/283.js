function moveZeroes(nums) {
    let idx = 0;
     for (let i = 0; i < nums.length; i++) {
      if(nums[i] === 0)continue;
      nums[idx++] = nums[i];
     }
     while(idx < nums.length)nums[idx++] = 0;
     return nums;
   }