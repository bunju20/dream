/*
I: int 
O: boolean
C: 
1 <= n <= 108
E:
if(n === 1)return true;

Input: n = 153
Output: true

ds: x
algo: x
solution:
    -edge처리
    -let sum
    -for(n/10)
        -sum += 나머지 ^ 문자열길이
    -return n === sum


time: O(N)
space: O(1)
*/

var isArmstrong = function (n) {
  if (n === 1) return true;
  let sum = 0;
  let nLen = 0;

  for (let i = n; i > 0; i = Math.floor(i / 10)) nLen++;

  for (let i = n; i > 0; i = Math.floor(i / 10)) {
    let curNum = i % 10;
    sum += Math.pow(curNum, nLen);
  }
  return n === sum;
};