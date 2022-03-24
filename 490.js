/*
16:08 ~

I:이차원 배열
O:bool
C:
m == maze.length
n == maze[i].length
1 <= m, n <= 100
maze[i][j] is 0 or 1.
start.length == 2
destination.length == 2
0 <= startrow, destinationrow <= m
0 <= startcol, destinationcol <= n
Both the ball and the destination exist in an empty space, and they will not be in the same position initially.
The maze contains at least 2 empty spaces.

E:

ds:x
algo:dfs


solution:

dfs
- if(도착지점이랑 같으면)return true;
- for(4방향)
    - while(끝까지 && 1이 아닐동안) i,j같은 방향으로 계속 이동시킴.
    - 한번 뒤로가고
    - if(다녀온애면 continue)
    - 현재위치 지나갔다고 표시해줌.
    - if(dfs)return true;
-return false;

배열의 크기 : N 
time: O(N*M)
space: O(N*M)

*/


var shortestDistance = function (maze, start, destination) {
  if (start[0] === destination[0] && start === destination[1]) return 0;

  let m = destination.length;
  let n = destination[0].length;
  let sum = 0;

  let dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let curI = start[0];
  let curJ = start[1];

  for (let [di, dj] of dir) {
    let count = -1;
    while (
      curI >= 0 &&
      curI < m &&
      curJ >= 0 &&
      curJ < n &&
      maze[curI][curJ] !== 1
    ) {
      curI += di;
      curJ += dj;
      count++;
    }
    curI -= di;
    curJ -= dj;

    console.log(curI, curJ);
    if (maze[curI][curJ] !== 0) continue;
    maze[curI][curJ] = 2;

    sum += shortestDistance(maze, [curI, curJ], destination);
    return sum;
  }
  return -1;
};
