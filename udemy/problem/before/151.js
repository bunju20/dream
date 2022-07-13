
/*
time:O(N)
space:O(N)

*/
var reverseWords = function(s) {
    let result = s.split(' ');
    result = result.reverse();
    result = result.filter((a) => a !== '');
    return result.join(' ');
};