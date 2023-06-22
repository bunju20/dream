/*
I: n(펜스 개수), k(색개수)
O: 칠할수있는 경우의 수
C:
1 <= n <= 50
1 <= k <= 105
The testcases are generated such that the answer is in the range [0, 231 - 1] 
for the given n and k.
E:
if(n===1)return k;
if(k === 1)return 1;

ds: x
algo:x

  
solution:
경우의 수로 DP만들어서 풀었음.

다른경우, 같은경우
4 * 1 + 2*1 = 1
0 0 0 0
0 2 4 

7 2
0 0 0 0 0  0  0  0
0 2 4 6 10 16 26 42 ...
4 + 2


*/
var numWays = function (n, k) {
  let paint = new Array(n + 1).fill();
  paint[0] = 0;
  paint[1] = k;
  paint[2] = k * k;

  for (let i = 3; i <= n; i++) {
      let close = paint[i - 1] * (k)
    paint[i] = (paint[i - 1] + paint[i - 2]) * (k - 1);
  }
  console.log(paint)
  return paint[n];
};