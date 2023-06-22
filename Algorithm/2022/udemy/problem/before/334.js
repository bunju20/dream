/*
I:char 배열
O:뒤집힌 char배열
C:
1 <= s.length <= 105
s[i] is a printable ascii character.

E:
if(s.length === 1)return s;

ds:x
algo:two pointer

solution:

l = 맨왼
r = 맨 오른

while(l < r)
-swap(s[l],s[r]);

return s

time:O(N)
space:O(1)

*/

let reverseString = function(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        ++left;
        --right;
    }
    return s;
};