/*
5:30 ~ 7: 30(ㅎㅎ..)

I: string 
O: 사전에 가장 마지막에 있는 문자열
C:
1 <= s.length <= 4 * 105
s contains only lowercase English letters.

E:
if(s.length === 1)return s;



"cacacb"
 ^
 ^
i:
j:

-포인터 두개로 중복되는 애들은 몇개 중복되는지 기억해두고.
-if(오른쪽 애가 더 커졌다)왼쪽 포인터가 중복되는애 찾다가 오른쪽 포인터 넘어갔을
경우를 생각햐면서 l,r갱신해주고
-if(왼쪽이 더 크다)r만 갱신해준다.


time: O(N)
space: O(1)
*/
var lastSubstring = function (s) {
  let l = 0;
  let r = 1;
  let re = 0;

  while (r < s.length) {
    re = 0;
    if (s[l + re] === s[r + re]) {
      while (s[l + re] === s[r + re]) re++;
    }
    if (s[l + re] < s[r + re]) {
      l = Math.max(l + re + 1, r);
      r = l + 1;
    } else r = r + re + 1;
  }
  return s.substr(l);
};