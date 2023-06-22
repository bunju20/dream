/*
Time: O(N * 2^N)
Space: O(N)
*/

var generateAbbreviations = function(word) {
    var result = [];
    if(!word) return [''];
    var sb = [];
    dfs(result, sb, word, 0, 0);
    return result;
};

function dfs(result, sb, strs, num, index) {
    if(index === strs.length) {
        result.push(sb.join('')+(num?String(num):'')); //O(N)
        return;
    }
    dfs(result, sb, strs, num+1, index+1);
    if(num)sb.push(num);
    sb.push(strs.charAt(index));
    dfs(result, sb, strs, 0, index+1); 
    sb.pop();
    if(num)sb.pop();
}