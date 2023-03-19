/*
I: int n
O: 혼동되는 숫자의 갯수
C: 1 <= n <= 109
E: x

ds:map
algo:x

solution:

0
6 9 => 2

00
1 0,6,8,9 => 4
6 0,1,6,8
8 0,1,6,9
9 0 1 8 9 => 16

000

1 1** => 5*5 - 3 => 22
6 6** => 5*5 - 3 => 22
... 


=> 106

49

0000   (oxxo) 
1 1*** => 5*5*5 - (00,11,88,69,96)(5) => 120
...

00000
1 1**** => 5*5*5*5 - (00,11,88,69,96) * 3 (15개)
아마도...? 어우 머리야.
1599
1*2*5*5+1 - 5
*/

var confusingNumberII = function (n) {
  let map = {
    0: 0,
    1: 1,
    6: 9,
    8: 8,
    9: 6,
  };
  let res = [0];
  helper(n, 0, res, map);
  return res[0];
};

function helper(N, cur, res, map) {
  if (isConfusingNumber(cur, map)) res[0]++;
  for (let x of Object.keys(map)) {
    let i = parseInt(x);

    if (cur * 10 + i <= N && cur * 10 + i != 0)
      helper(N, cur * 10 + i, res, map);
  }
}

function isConfusingNumber(n, map) {
  let src = n;
  let res = 0;

  while (n > 0) {
    let key = "" + (n % 10);
    res = res * 10 + map[key];
    n = Math.floor(n / 10);
  }
  return res != src;
}