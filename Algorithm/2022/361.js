/*
20분까진 해보고...
I: "0" "E" "W" 으로 이루어진 2d array
O: 폭탄으로 죽일수있는 최대 적의 수.
C: x
E: x

 [["0","E","0","0"],
 ["E","0","W","E"],
 ["0","E","0","0"]]

        0       1      2    3        4

0             [1,1]   [1,1]  [1,0] [1,1]
1             [1,1] [1,2]   [-1,-1] [1,1]
2             [1,1] [1,1]    [1,0] [1,1]
3

ds: x
algo: DP
solution:
-dp table만들고 [-1,-1]으로 초기화, 0,0애들 findPeople돌려서 초기화해줌.
-for
    -for
        -if(ar[i][j] === "0")
            -if(왼쪽 값이 벽이 아니면)현재 dp왼쪽 걸로 갱신
            -else 벽이면 findPeople돌려서 갱신
            -if(위 값이 벽이 아니면) dp 위걸로 갱신
            -else 벽이면 findPeople돌려서 갱신
-dp 돌면서 합이 제일 큰거 갱신
-그거 반환


function findPeople:(방향,배열,curI,curJ)
-let pepleNum = 0;
- while(벽이나 끝 만날때까지)
    -if(사람있으면)pepleNum++;
    - curI += 방향 
    - curH += qkdgid
-return pepleNum;

배열의 크기 : N
time: O(N)
space:O(N)
*/
var maxKilledEnemies = function (grid) {
    let dp = Array.from(Array(grid.length+1),() => Array(grid[0].length + 1).fill([-1,-1]));

    for (let i = 1; i < grid[0].length + 1; i++) {
      if(grid[0][i-1] === "W")continue;
      dp[0][i] = [0,findPeople([1, 0], grid, 0, i-1)];
    }
    for(let i = 1; i < grid.length+1; i++){
        if(grid[i-1][0] === "W")continue;
        dp[i][0] = [findPeople([0, 1], grid,i-1,0),0];
    }
    
    for(let i = 1; i < grid.length + 1; i++){
        for(let j = 1; j < grid[0].length + 1; j++){
            if(grid[i-1][j-1]==="W")continue;
            let curVal = [0,0];
            if(dp[i][j-1][0] !== -1)curVal[0] = dp[i][j - 1][0];
            else curVal[0] = findPeople([0,1], grid, i-1, j-1);
            if(dp[i-1][j][0] !== -1)curVal[1] = dp[i-1][j][1];
            else curVal[1] = findPeople([1,0], grid, i-1, j-1);

            dp[i][j] = curVal;
        }
    }
    let maxNum = 0;

    for(let i = 1; i < dp.length; i++){
        for(let j = 1; j < dp[0].length; j++){
            let curNum = dp[i][j];
            if(grid[i-1][j-1] === "0")maxNum = Math.max(maxNum,curNum[0] + curNum[1]);
        }
    }
    return maxNum;

};

function findPeople(dir, grid, curI, curJ) {
    let peopleNum = 0;
    while(curI >= 0&& curI < grid.length && curJ >= 0&& curJ < grid[0].length && grid[curI][curJ] !=="W"){
        if(grid[curI][curJ] === "E")peopleNum++;
        curI += dir[0];
        curJ += dir[1];
    }
    return peopleNum;
}