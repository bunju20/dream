/*
solution:

main
-while
  si = clearBack
  ti = clearBack
-if(s[si] !== t[ti])return false;
si ti --;
 
clearBack
-skip
-while문
  -if(현재값이 #이면 skip++ 해주고 index--)
  -else if(skip > 0) skip--, index--;
  -else break;
return index;

time: O(N)
space: O(1)
*/
 var backspaceCompare = function(s, t) {
  let sIdx = s.length - 1;
  let tIdx = t.length - 1;

  while (sIdx >= 0 || tIdx >= 0) {
    sIdx = clearBackSpace(s, sIdx);
    tIdx = clearBackSpace(t, tIdx);

    if (s[sIdx] !== t[tIdx]) return false;
    sIdx--;
    tIdx--;
  }
  return true;
};

var clearBackSpace = function(s, i) {
  let skip = 0;

  while (i >= 0) {
    if (s[i] === '#') { skip++; i--; }
    else if (skip > 0) { skip--; i--; }
    else { break; }
  }
  return i;
}