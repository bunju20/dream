/*
- for(배열길이)
    - 단어 받고
    -for(그 단어길이)
        -word[i][j]랑 word[j][i]비교하고 다르면 return false
-return true;

배열의 길이: N
가장 긴 문자열의 길이: M
time: O(NM)
space: O(1)
*/
var validWordSquare = function(words) {
    var m = words.length;
    for(let i=0; i < m; i++){
        var curr = words[i];
        for(var j=0;j<curr.length; j++){
            if(j>= m || i>= words[j].length || words[i].charAt(j) != words[j].charAt(i)){
                return false;
            }
        }
    }
    return true;
};