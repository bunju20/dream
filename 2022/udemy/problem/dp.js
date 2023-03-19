/*

5

  '' b a b a d
'' 1
b  0 1
a  0 0 1
b  0 0 0 1 
a  0 0 0 0 1 
d  0 0 0 0 0 0 
*/

var longestPalindrome = function(s) {
    
	if(s.length <= 1) return s;
	let longest = [-1,-1];
    const dp = Array.from(Array(s.length+1),()=>Array(s.length+1).fill(false));
    
    for(let i = 0; i < s.length; i++) {
        dp[i][i] = true;
        longest[0] = i;
        longest[1] = i+1;
    }
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === s[i + 1]) dp[i][i+1] = true;
        if(dp[i][i+1]){
            longest[0] = i;
            longest[1] = i+2;
        }
    }

    for(let i = s.length - 1; i >= 0; i--) {
        for(let j = i + 2; j < s.length; j++) {
            dp[i][j] = dp[i+1][j-1] && s[i] === s[j];
            if(dp[i][j] && (j - i + 1) > longest[1] - longest[0]){
                longest[0] = i;
                longest[1] = j+1;
            }
        }
    }
    
    return s.substring(longest[0],longest[1]);
}