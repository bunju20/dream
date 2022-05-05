/*
I: string 3개
O: baseStr을 가장 사전순에서 작은애로 만든 Str
C:
1 <= s1.length, s2.length, baseStr <= 1000
s1.length == s2.length
s1, s2, and baseStr consist of lowercase English letters.

E: if(s1의 길이 === 1)return 둘중에 더 작은거 반환


Input: s1 = "parker", s2 = "morris", baseStr = "parser"
Output: "makkek"


p : m
a : a
s : k
e : e
r : k


ds: map
algo: x
solution:

baseStr의 길이: N
s의 길이: M
time:  O(N*M)
space: O(1)
*/

var smallestEquivalentString = function(A, B, S) {
    let map = new Array(26);
    for(let i = 0; i < 26; i++) {
        map[i] = i; //originally each char maps to itself
    }
    
    for(let i = 0; i <A.length; i++) {
        let a = A.charCodeAt(i) - 97, b = B.charCodeAt(i) - 97;
        while(map[b] != b) b=map[b]; // finnd the smallest value current char maps to
        while(map[a] != a) a=map[a];
        if(b < map[a]) { // if the new mapping will result in a smaller string, update the map
          map[a] = map[b];
        }  
        if(a < map[b]) {
            map[b] = map[a];
        }
    }

    let result = [];
    for(let i = 0; i < S.length; i++) {
        let c = S.charCodeAt(i) - 97;
        while(map[c] != c) c=map[c];
        result.push(String.fromCharCode(c+97));
    }
    return result.join('');
};