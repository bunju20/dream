/*
Input: nums = 
  [1,2,3,1]
[0 1 ]

Output: 4
*/
const rob = nums => {
    if(nums == null || nums.length == 0) return 0;
    if(nums.length === 1) return nums[0]
    if(nums.length === 2) return Math.max(...nums);
    let dp = new Array(nums.length + 1);
    dp[0] = 0;
    dp[1] = nums[0];
    
    for(let i = 2; i < nums.length + 1; i++){
        dp[i] = Math.max(nums[i-1] + dp[i - 2], dp[i-1])
    }
    return dp[dp.length-1]
};