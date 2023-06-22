
/*
- 길이가 1 초과로 차이나면 false
- 긴문자열 기준으로 포인터 두개 비교하면서 추가된or다른 문자 개수 찾음
- 그 개수 1개면 true;
*/

var isOneEditDistance = function (s, t) {
  if (Math.abs(s.length - t.length) > 1) return false;
  let count = s.length > t.length ? findCount(s, t) : findCount(t, s);
  return count === 1;
};

function findCount(s, t) {
  let j = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[j]) count++;
    if (s.length === t.length || s[i] === t[j]) j++;
  }
  return count;
}


/*

9 : 15 ~ 9 : 37

I: string s, t
O: boolean
C:
0 <= s.length, t.length <= 104
s and t consist of lowercase letters, uppercase letters, and digits.
E:
if(s.length === 0 && t.length === 0)return false;
if(s.length === 0 && t.length === 1)return true;
if(두개 길이가 1개 초과로나면)return false;

"ab" 부족하든지, 많든지, 하나가 다르든지.
  ^
"acb"
  ^

solution:
-if(s가 더 작으면)
    - 돌면서 t 이동하면서 s모두 읽었으면 return true;
-if(s가 더 크면) t 모두 읽었으면 return true;
-return false;

문자열의 길이 : N
time:O(3N) => O(N)
space:O(1)

};

*/

var isOneEditDistance = function (s, t) {
  if (s.length === 0 && t.length === 0) return false;
  if (Math.abs(s.length - t.length) > 1) return false;

  let sIdx = 0;
  let tIdx = 0;

  if (s.length < t.length) {
    for (let i = 0; i < t.length; i++) {
      if (s[sIdx] === t[i]) sIdx++;
    }
    if (s.length === sIdx) return true;
  } else if (s.length > t.length) {
    for (let i = 0; i < s.length; i++) {
      if (t[tIdx] === s[i]) tIdx++;
    }
    if (t.length === tIdx) return true;
  } else {
    let num = 0;
    for (let i = 0; i < s.length; i++) {
      if (t[i] === s[i]) num++;
    }
    if (t.length === num + 1) return true;
  }

  return false;
};

