/*
I: string
O: 중복되는 문자가 없는 단어의 최대 길이
C:
0 <= s.length <= 5 * 10^4
s consists of English letters, digits, symbols and spaces.
E:
if(s.length <= 1)return s.length;

ds: hash map
algo:two pointer

"abcabcbb"
        ^ 
        ^ 

 a: 1
 b: 1
 c: 1

solution:
-map
-for
    -curChar이 map에 있으면 while문으로 돌리면서 map갱신
    -없으면 map갱신
    -최대 길이 갱신
-return 최대길이

time: O(N)
space:O(M) //M < 27

"abcabcbb"
 */

var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1)return s.length;
    let map = {};
    let l = 0, r = 0;
    let maxLen = 0;
    while(r < s.length){
        let curChar = s[r];
        if(map[curChar]){
            while(s[l] !== curChar){
                let newChar = s[l];
                map[newChar] = 0;
                l++;
            }l++;
        }else map[curChar] = 1;

        maxLen =Math.max( r - l + 1,maxLen);
        r++;
    }
    return maxLen;
};