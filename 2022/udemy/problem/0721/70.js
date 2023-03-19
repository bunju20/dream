/*
0 1 2 3 4
0 1 2 3 5
1을 가거나
2를 갔을때의 경우의 수
*/


var climbStairs = function(n) {
    if(n === 1)return 1;
    const dp = new Array(n+1);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;

    for(let i = 3; i < n+1; i++) dp[i] = dp[i-1] + dp[i-2];
    return dp[n];
};