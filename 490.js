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



const hasPath = (maze, start, destination) => {
    if (start[0] === destination[0] && start[1] === destination[1]) {
        return true;
    }

    const m = maze.length;
    const n = maze[0].length;
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    for (let [dx, dy] of dirs) {
        let i = start[0], j = start[1];
				
        while (i >= 0 && i < m && j >= 0 && j < n && maze[i][j] !== 1) {
            i += dx; j += dy;
        }
        i -= dx; j -= dy;

        if(maze[i][j] !== 0)continue;
        maze[i][j] = 2;
				
        if (hasPath(maze, [i, j], destination)) return true;
    }
    
    return false;
};

