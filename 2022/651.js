/*
I: int n
O: 최대로 인쇄할수있는 A의 개수
C:  1<= n <= 50
E: if(n <= 6)return n

Input: n = 7
Output: 9

solutione:
3*(전까지 복사하던 애의 길이)보다
(지금복사할 애의길이가)크거나 같아지면 갱신해줘야하는듯.

A -> 1*3 > 1
AA-> 1*3 > 2
AAA -> 3 >= 3
AAAAAA-> 3*3   > 6 ...이런식.

time: 
space:


var maxA = function (n) {
    if(n <= 6)return n;

    let len = 1; //복사창에 들어있는애 길이.
    let sum = 0;

    for(let i = 1; i <= n; i++){
        let preNum = len * 3;
        let newNum = i;
        if(preNum <= newNum){
            len = i;
            i+=2;
        }
        sum += len
    }
    return sum;

};


dp[6]
1.dp[1] + dp[1] * 3 = dp[i-5] * 4
2.dp[2] + dp[2] * 2 =  ...
3.dp[3] + dp[3] * 1 =  ...
이거 이용해서 아래처럼 일반화해서 푸는건갑다...
dp[i] = Math.max(dp[i - 4] * 3, dp[i - 5] * 4)

*/

var maxA = function(N) {
  const dp = new Array(N + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 3;

  for(let i = 4; i <= N; i++){
    dp[i] = dp[i-1] + 1;
    for(let j = 1; j < i - 2; j++){
      let newNum = dp[j] + (i - j - 2)*dp[j];
      dp[i] = Math.max(dp[i], newNum);
    }

  }
  return dp[N];
}