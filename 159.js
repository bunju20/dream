/*
10: 50 ~ 11:36

I: string
O: 두개로 이루어진 최대로 긴 substring
C: 
1 <= s.length <= 105
s consists of English letters.
E:
if(s.length <= 2)return s;

최대 length
l: a
r: b
4
"ccaabbb"
   ^        
       ^
ds: x
algo: two pointer 

solution:
-map만들고
-i,j만들고
-while(i < s.length)
    - first받아옴. i++함.
    - first키에 first값이나 0 에  +1gowna.
    - while(mapsize가 2개보다 큰 경우엔)
        -last받고
        -새로운 카운트 만들고
        -if(걔가 0이면)map삭제하고
        -아니면 map에 last키로 하나 만들고
    - max 갱신
-return max;



*
- 값을 받아서 map에다가 넣어.(무조건 넣음)그 값이 있으면 + 1한 값 넣고.
- while(맵의 크기가 > 2인동안){
    -왼쪽꺼 값 받아옴, - 1함
    -if(값이 0이됐으면) 해당하는키 delete하고
    -else 왼쪽꺼 값만 수정해줌
}
-max갱신해줌.


s의 크기 : N
time: O(N)
space: O(1)
*/

var lengthOfLongestSubstringTwoDistinct = function (s) {
  let max = 0;
  const counts = new Map();

  let i = 0;
  let j = 0;

  while (i < s.length) {
    const first = s[i++];
    counts.set(first, (counts.get(first) || 0) + 1);

    while (counts.size > 2) {
      const last = s[j++];
      const newCount = counts.get(last) - 1;

      if (!newCount) counts.delete(last);
      else counts.set(last, newCount);
    }
    max = Math.max(i - j, max);
  }

  return max;
};