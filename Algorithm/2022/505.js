/*
solution:
time: O(N*M^2) (N < M)일때
space: O(N*M)

*/

var shortestDistance = function(maze, start, destination) {

    if (maze === null || maze.length === 0 || maze[0].length === 0) return maze;
    
    let distance = new Array(maze.length);
    
    const destRow = destination[0];
    const destCol = destination[1];
    
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    for (let i = 0; i < distance.length; i++) {
        distance[i] = new Array(maze[0].length).fill(Number.MAX_SAFE_INTEGER);
    }
    
    let queue = [];
    start.push(0)
    queue.push(start);
    
    
    while (queue.length) {
        let cur = queue.shift();
       
        for (let i = 0; i < dirs.length; i++) {
            let row = cur[0];
            let col = cur[1];
            let curDis = cur[2];
            
           
            while (row >= 0 && row < maze.length && col >= 0 && col < maze[0].length
                  && maze[row][col] != 1) {
                row += dirs[i][0];
                col += dirs[i][1];
                curDis++;               
            }
            row -= dirs[i][0];
            col -= dirs[i][1];
            curDis--;
           if (curDis < distance[row][col]) {
               distance[row][col] = curDis;
               queue.push([row, col, curDis]);
           }
         
        }
    }
    
    return distance[destRow][destCol] === Number.MAX_SAFE_INTEGER ? -1 : distance[destRow][destCol];
    
};
const checkValid = function(row, col, destR, destC) {
    if (row === destR && col === destC) return true;
    return false;
};