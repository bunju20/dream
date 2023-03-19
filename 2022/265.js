/*

4:20 ~ 5:06

\
I: 배열 [비용,비용,비용]으로 이루어진
O: 칠할수 있는 최소비용
C:
costs.length == n
costs[i].length == k
1 <= n <= 100
2 <= k <= 20
1 <= costs[i][j] <= 20
E:
if(배열의 길이가 1이면)그냥 셋중에 제일 작은거 반환
엥 값이 1에서 20밖에 없다고?
  0 1 2 3... k 
0   0 0 0... 가장 작은애랑, 두번째로 작은애만 기억해두면 됨.
1   1 5 3
2   5
...
n

ds: x
algo: DP
solution:

-ar[i][j] = ar[i-1]에 있는 배열중에 자기 인덱스 아닌곡중에 제일 작은값.
-마지막에서 제일 큰값 구해서 반환

time: O(nk)
space:O(nk)

*/
var minCostII = function (costs) {
  let n = costs.length;
  let k = costs[0].length;

  let mostMinVal = [Infinity, 0]; //값, 그 값의 인덱스
  let secondMinVal = [Infinity];
  let dp = Array.from(Array(n + 1), () => Array(k + 1).fill(0));

  for (let i = 1; i < k + 1; i++) {
    let curNum = costs[0][i - 1];
    dp[1][i] = curNum;
    if (curNum < secondMinVal[0])
      swaping(mostMinVal, secondMinVal, [curNum, i - 1]);
  }

  for (let i = 2; i < n + 1; i++) {
    let newMost = [Infinity, 0]; //값, 그 값의 인덱스
    let newSecond = [Infinity];

    for (let j = 1; j < k + 1; j++) {
      let curNum = 0;
      if (mostMinVal[1] !== j - 1) curNum = mostMinVal[0] + costs[i - 1][j - 1];
      else curNum = secondMinVal[0] + costs[i - 1][j - 1];
      dp[i][j] = curNum;
      if (curNum < newSecond[0]) swaping(newMost, newSecond, [curNum, j - 1]);
    }
    mostMinVal = [...newMost];
    secondMinVal = [...newSecond];
  }
  let res = Infinity;

  for (let i = 1; i < k + 1; i++) {
    res = Math.min(res, dp[n][i]);
  }
  return res;
};

function swaping(most, second, newVal) {
  if (newVal[0] >= most[0]) second[0] = newVal[0];
  else {
    second[0] = most[0];
    most[0] = newVal[0];
    most[1] = newVal[1];
  }
}