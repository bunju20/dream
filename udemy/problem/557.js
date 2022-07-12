/*
I:
O:
C:
E:

ds:
algo:
solution:
time: O(N)
space: O(N)

string char배열로 변경
l,r

for(단어길이)
-if(공백 발견)
    -l,r갱신
    -reverse변경
return string.join('');


function reverse(l,r,ar)
while로 단어 reverse힘

*/

var reverseWords = function(s) {
    s = s.split(' ')

    for (let word = 0; word < s.length; word++) {
        s[word] = reverse(s[word])
    } 
	
    return s.join(' ')
};

function reverse(word) {
    word = word.split('')
    for (let left = 0, right = word.length - 1; left < right; left++, right--) {
        const temp = word[left]
        word[left] = word[right]
        word[right] = temp

    }
    return word.join('')
}