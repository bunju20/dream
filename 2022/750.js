/*
1:56~ 3:20

I: 2d array
O: 1 4개로 만들수있는 직사각형 개수의 총합.
C:
m == grid.length
n == grid[i].length
1 <= m, n <= 200
grid[i][j] is either 0 or 1.
The number of 1's in the grid is in the range [1, 6000].
E:
if(m === 1 ||n === 1)return 0;

Input: grid = 
[[1,1,1],
[1,1,1],
[1,1,1]]
Output: 9

왼쪽 모서리로부터 만들어질수 있는 사각형의 개수.

가로 줄을 긋는다고 생각해볼까... 시작점과 길이만 있으면 됨.
[0,4] 
[2,3] 
[0,3] 
[0,6]
[3,3]
[3,3]
그러면 그냥 일케 할래? 짜피 선분의 최소~최대는 윗변길이임.
-> 공간아깝긴한데... 시간은 줄어들거라서

선분만들때 안되돌아가게 한번 돌려서 1의 개수랑 인덱스 기억해놨다가 빼주고 그러면 될듯.
스택도 쓰나... 뒤에서부터 넣어가지고.

ds: array
algo: x

solution:
-2d배열 만들고
-for(높이)
    -for(뒤에서부터 ~ 너비)배열에다가 1개수 넣어놓고
    -while + for (배열길이만큼)
        [시작점,길이]해서 배열 채워줌.
-만든 배열에서 원소가 같은 애들 찾고.
-찾은걸로 개수 계산해서 리턴

time:O(m*n^2)
space:O(n^2)
*/
var countCornerRectangles = function (grid) {
  if (grid.length === 1 || grid[0].length === 1) return 0;
  let ar = Array.from(Array(grid.length), () => Array(grid[0].length).fill(0));
  for (let i = 0; i < grid.length; i++) { //m
    let curOnes = [];
    for (let j = 0; j < grid[0].length; j++) {//n
      if (grid[i][j] === 1) curOnes.push(j);
    }
    while (curOnes.length) { //n*n
      for (let j = curOnes.length - 2; j >= 0; j--) {
        ar[curOnes[j]][curOnes[curOnes.length - 1]]++;
      }
      curOnes.pop();
    }
  }

  let sameNum = [];
  for (let i = 0; i < ar.length; i++) { //n
    for (let j = 0; j < ar[0].length; j++) { //n
      if (ar[i][j] >= 2) sameNum.push(ar[i][j]);
    }
  }

  console.log(ar);
  let res = 0;
  for (let i = 0; i < sameNum.length; i++) { //n*n
    let curSame = sameNum[i];
    res += findNum(curSame);
  }
  return res;
};

function findNum(sameNum) {
  let x = 1;
  let res = 0;
  for (let i = 0; i < sameNum - 1; i++) { //n
    res += x++;
  }
  return res;
}


// 5개면 1*5 + 2*4 + 3 * 3 +... 이거고 3개면 3개짜리 한개 2개짜리 2개... 
// 5개면 5 1개 4 2개 3 3개 2 4개... 1 + 2 + 3 + 4...하는데 같은거의 개수만큼.
// 같은게 3개면 1+2 하고 같은거 4개면 1 + 2 + 3하고.