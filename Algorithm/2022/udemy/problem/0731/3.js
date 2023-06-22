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