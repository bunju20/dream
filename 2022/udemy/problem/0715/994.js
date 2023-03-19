/*
space: O(N)
time: O(N)

*/
var orangesRotting = function(grid) {
    const height = grid.length;
    const width = grid[0].length;
    let fresh = 0;
    const queue = [];
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (grid[i][j] === 2) queue.push([i, j]);
        if (grid[i][j] === 1) fresh++;
      }
    }
    let minute = 0;
    let dir = [[0,1],[1,0],[0,-1],[-1,0]];
    while (queue.length) {
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const [x, y] = queue.shift();

        for(let j = 0; j < 4; j++){
            let newI = x + dir[j][0];
            let newJ = y + dir[j][1];
            if(newI >= 0 && newJ >= 0 && newI < height && newJ < width && grid[newI][newJ] === 1){
            grid[newI][newJ] = 2;
            fresh--;
            queue.push([newI,newJ]);
            }
        }
      }
      if (queue.length > 0) minute++;
    }
    return fresh === 0 ? minute : -1;
  };
