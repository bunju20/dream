/*
-그냥 둘이 같으면 true반환하시고

-for(1길이)
    -if(맵안에 지정된게 있는데 그게 2의 값과 다르면)return fasle;
    -map.set(1에 있는 문자, 2에있는 문자)

    set만들고 setsize가 26이면 false반환.

    이게 뭐냐면
    str1에있는 a를 m으로, b를 m으로 이런식으로 바꾸면 일대일 대응이 아닌셈이잖아.
    그니까 일대일 대응이면 바꾸질 못하니까 false고 중간에 a링 b링 c모두 m으로 바꾼다고
    해버리면은 괜찮어. 사이클 도는동안 다른애들거 빼쓸수 있거덩.
    
    return 
 


*/

nst canConvert = (str1, str2) => {
  if (str1 === str2) return true;

  const map = new Map();
  for (let i = 0; i < str1.length; i++) {
    if (map.has(str1[i]) && map.get(str1[i]) !== str2[i]) {
      return false;
    }
    map.set(str1[i], str2[i]);
  }

  const set = new Set(map.values());
  return set.size < 26;
};

