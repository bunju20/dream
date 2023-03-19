/*
I: array
O: array (최소비용이 발생하는 인덱스의 경로)
C:
1 <= coins.length <= 1000
-1 <= coins[i] <= 100
coins[1] != -1
1 <= maxJump <= 100
E:
if(coins.length === 1)return 배열;

ds: x
algo: DP

solution:
[1,2,4,-1,2], maxJump = 2


*/


var cheapestJump = function (coins, maxJump) {
    let memo = [];
    const res = dfs(0);
    return res.path.map(item => item + 1);

    
    function dfs(idx) {
        if (memo[idx] !== undefined) {
            return memo[idx];
        }

        if (idx === coins.length - 1) {
            memo[idx] = { val: coins[idx], path: [idx] };
            return memo[idx];
        }

        let min = Infinity;
        let minIdx = -1;
        // pick smallest children that can reach
        for (let i = idx + 1; i <= idx + maxJump && i < coins.length; i++) {
            if (coins[i] === -1) continue;
            let currentIdx = dfs(i);
            if (currentIdx.val < min) {
                min = currentIdx.val;
                minIdx = i;
            }
        }

        if (minIdx === -1) {
            memo[idx] = { val: undefined, path: [] };
        } else {
            memo[idx] = { val: memo[minIdx].val + coins[idx], path: [idx, ...memo[minIdx].path] };
        }

        return memo[idx];
    }
};