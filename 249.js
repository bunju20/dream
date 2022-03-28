/*
그니께... 그룹화를 한다고?
그럼 일케 하면 되지않니.
111
111
221
111
25
25
-1
-1
이런식으로다가 그냥 차ㅇ이가 존재하는거잖아.
그럼 구해서 그냥... 구하면 되는거아님?
없는애면 맵에 key만들고 있는애면 푸쉬해서 반환해.

배열길이: N
가장긴 문자열의 길이: M
Time: O(N*M)
Space: O(N*M)
*/

var groupStrings = function (strings) {
  if (strings.length === 1) return [strings];
  let map = {};
  let result = [];

  for (let i = 0; i < strings.length; i++) {
    let curStr = strings[i];
    let curKey = makeKey(curStr);
    if (curKey in map) {
      map[curKey].push(curStr);
    } else map[curKey] = [curStr];
  }

  for (let ar of Object.values(map)) {
    result.push(ar);
  }
  return result;
};

function makeKey(s) {
  let key = [];
  if (s.length === 1) return ".";
  for (let i = 0; i < s.length - 1; i++) {
    let curDif = s[i + 1].charCodeAt(0) - s[i].charCodeAt(0);
    if (curDif < 0) curDif += 26;
    key.push(curDif);
    key.push(".");
  }

  key.pop();
  return key.join("");
}