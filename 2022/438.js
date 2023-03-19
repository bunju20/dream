/*

solution:

p에 대한 맵과 p의 길이(count)를 기억해놨다가.
s를 슬라이딩 윈도우로 돌면서 맵을 계속 갱신하고, count를 늘렸다 줄였다 하면서
0이 됐을때 l를 푸시해주는 방식으로 품. 

- p돌면서 맵만들어줌
- l,r = 0, count = p.length
- while( r < s.length)
    - if(r이 맵에 있다.)count--;
    - map[r]--; r++;
    - if(count === 0)푸시.
    - if(넓이가 p길이 넘었음.)
        - map[l]값이 >= 0 면 count++;
        - map[l]++;
        - l++
- return 배열.

time: O(s+p)
space: O(s+p) // s+p <= 26

*/
const findAnagrams = (s, p) => {
  const output = [];
  const map = {};

  for (let char of p) {
    if (char in map) map[char]++;
    else map[char] = 1;
  }

  let left = 0;
  let right = 0;
  let count = p.length;

   while (right < s.length) {
      if (map[s[right]] > 0) count--;
      map[s[right]]--;
      right++;
      if (count === 0) output.push(left);
      if (right - left == p.length) {
      if (map[s[left]] >= 0) count++;
      map[s[left]]++;
      left++;
    }
  }
  return output;
};
