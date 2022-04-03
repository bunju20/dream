/*
I:
O:
C:
E:

algo:
[[17,2,17],
[16,16,5],
[14,3,19]] = 인접하지 않을떄의 최소의 합.

  0    1       2 (n개)
0 17  2+16    7+14
1 2   17+16   7+ 3 = 10;
2 17   2+5    18+19



solution:
-dp테이블 만들고.
-for(n만큼)
    -for(3번)
        -자기를 제외한 두개중에 작은애를 받아오고 그거랑 현재 값을 더한값으로 dp갱신
-for(3)
    마지막에서 제일 작은거 반환.

배열의 크기 : N
time: O(N)
space: O(N)

*/

var minCost = function(costs) {
    if(costs.length === 1)return Math.min(costs[0][0],Math.min(costs[0][1],costs[0][2]));
    let dp = Array.from(Array(3),()=>Array(costs.length).fill(0));
    let x = 0;
    costs[0].map(c => dp[x++][0] = c);
    for(let i = 1; i < costs.length; i++){
        for(let j = 0; j < 3; j++){
            let min = Infinity;
            for(let k = 0; k < 3; k++){
                if(k === j)continue;
                min = Math.min(min,dp[k][i-1]);
                console.log(min)
            }
            dp[j][i] = min + costs[i][j];
        }
    }
    let res = Infinity;
    for(let i = 0; i < 3; i++){
        res = Math.min(res,dp[i][costs.length-1]);
    }
    return res;
    
};