/*
I: string
O: 문자가 하나만 있는 하위 문자열 수
C:
1 <= s.length <= 1000
s[i] consists of only lowercase English letters.

E:if(s.length === 1)return 1;


Input: s = "aaaba"
aaa b a
3+2+1
1
1

1+2+3+...+n => (n*(n+1) / 2)

ds: x
algo: x

a=> 3 => (공식)
b=> 1 => (공식)
a=> 1 => (공식)

solution:
''

time: O(N)
space: O(1)

*/
var countLetters = function(s) {
    if(s.length === 1)return 1;
    let num = 1;
    let ar = [];
    let result = 0;
    for(let i = 0; i < s.length - 1; i++){
        if(s[i] === s[i+1])num++;
        else{
            ar.push(num);
            num = 1;
        }
    }
    ar.push(num)
    ar.map(num => result += math(num));
    return result;


};

function math(n){
    return n * (n+1) / 2;
}