/*
rotate하는 문제임
거꾸로 되는 애들이 한정적이니까 map을 사용함.
맵에 없는 애들이면 false반환하고 있는 애들이면 result에 푸시하고
result join해서 그 값이 n과 다르면 true 아니면 false 반환
*/
function confusingNumber(n) {
  const str = `${n}`;
  const map = new Map([['0','0'], ['1','1'], ['6','9'] , ['8','8'], ['9','6']]);
  let rotated = [];
  for (let i = str.length - 1; i >= 0 ; i--) {
    const ch1 = str.charAt(i);
    const ch2 = map.get(ch1);
    if (!ch2) return false;
    rotated.push(ch2);
  }
  rotated = rotated.join('');
  rotated = parseInt(rotated);
  return rotated !== n;
}