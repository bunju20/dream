/*
최대 너비가 존재한다.


"pwwkew"
   ^
    ^
문자 인덱스
p: 0
w: 2
k: 3

3

Output: 3
N : s.length
time:  O(N)
space: O(N)
*/
var lengthOfLongestSubstring = function(s) {
    var l = 0, maxLen = 0;
    var map = new Map();
  
    for(var r = 0; r < s.length; r++) {
        var curChar = s[r];
      
        if(map.get(curChar) >= l) l = map.get(curChar) + 1;
        map.set(curChar, r);
      
        if(r - l + 1 > maxLen) maxLen = r - l + 1;
    }
  
    return maxLen;
  };