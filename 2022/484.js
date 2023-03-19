/*
15:10~
I: string
O: D랑 I로 잘 계산해서 나온 숫자배열
C:
1 <= s.length <= 105
s[i] is either 'I' or 'D'.

E:
if(s.length === 1)D면 21 I면 12반환

Input: s = "DI"
Output: [2,1,3]
 

ds: x
algo: ?
solution:



time: O(N)
space: O(1) //우잉 근데 이거 왜 O(1)이지???

*/
var findPermutation = function (s) {
  let res = new Array(s.length + 1);

  res[0] = 1;
  let i = 1;

  while (i <= s.length) {
    let j = i;
    res[i] = i + 1;

    if (s[i - 1] === "D") {
      while (i <= s.length && s[i - 1] === "D") i++;
      behind(i, j, res);
    } else i++;
  }
  return res;
};

function behind(curI, curJ, res) {
  let curNum = curI;
  for (let i = curJ - 1; i < curI; i++) {
    res[i] = curNum;
    curNum--;
  }
}
