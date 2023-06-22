/*
solution:


Input: nums = 
[1,-1,5,-2,3],
        ^
 ^

map만들어서 
sum : 0



k = 3
Output: 4


time:
space:

  [1,-1,5,-2,3], k = 3
   1 0  5  3 6
   ^
           ^

[-2,-1,2,1], k = 1
 -2 -3 -1 0
    ^  
       ^


*/
var maxSubArrayLen = function(nums, k) {
    let dp = new Array(nums.length);
    let sum = 0;
    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        dp[i] = sum;
    }

    let maxLen = 0;
    for(let i = 0; i < dp.length; i++){
        let forCorrect = dp[i] - k;
        if(dp[i] === k)maxLen = i + 1;
        if(!map.has(dp[i]))map.set(dp[i],i);
        if(map.has(forCorrect)) maxLen = Math.max(maxLen, i - map.get(forCorrect));
    }
    return maxLen;

};