/*
I:string
O:반복되는 substring의 최대길이
C:
1 <= s.length <= 2000
s consists of lowercase English letters.
E: if(s.length === 1)return 0;

  0 a b b a b a
0
a  x x x 1 x 1  
b  x x 1 x 2 x 
b  x x x x 1 x 
a  x x x x
b  x x x x x
a  x x x x x x
=> 머 이런식으로 풀면 될듯?

ds:
algo:dp
solution:
dptable
if(현재값이랑 같으면)
dp[i][j] = max dp[i-1][j-1]+1, 1

해서 다 만들고 제일 큰거 돌리면서 품.

time: O(N^2)
space: O(N^2)
*/

var longestRepeatingSubstring = function(s) {
    if(s.length === 1)return 0;
    let dp = Array.from(Array(s.length+1),()=>Array(s.length+1).fill(-1));
    let max = 0;
    for(let i = 1; i < s.length+1; i++){
        for(let j = i+1; j < s.length+1; j++){
            if(s[i-1] === s[j-1]){
                dp[i][j] = Math.max(dp[i-1][j-1]+1,1);
                max = Math.max(dp[i][j],max);
            }
        }
    }
    return max;

};