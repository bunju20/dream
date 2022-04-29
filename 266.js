/*
solution:
- string 돌면서 각 문자에 대해 map을 만들어줌.
- 맵 돌면서 짝수의 갯수를 샘.
- string의 길이가 짝수면 짝수 갯수랑 길이랑 같아야 true;
- 홀수면 짝수인 char의 갯수가 길이 - 1이랑 같아야  true

time: O(N)
space: O(M) M < 27
*/

var canPermutePalindrome = function(s) {
    if(s.length === 1)return true;
    let map = {};
    let even = 0;
    let odd = 0;

    for(let i = 0 ; i < s.length; i++){
        if(s[i] in map)map[s[i]]++;
        else map[s[i]] = 1;
    }

    for(let [key,val] of Object.entries(map)){
        if(val % 2 === 0)even +=val;
        else odd++;
    }
    
    if(s.length % 2 === 0){ //짝수일때
        return (even === s.length) ? true : false;
    }
    return (odd === 1) ? true : false;
};
