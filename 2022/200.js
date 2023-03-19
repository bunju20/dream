
var numIslands = function (grid) {
    let result = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === 1)dfs(grid,i,j);
            result++;
        }
    }
    return result;

};

function dfs(grid,i,j) {
    if(i < 0 || i > grid.length||
        j < 0 || j > grid[0].length||
        grid[i][j] !== 1)return ;

    grid[i][j] = 2;

    let dir = [[0,1],[1,0],[0,-1],[-1,0]];
    for(let[x,y] of dir){
        let newI = i + x;
        let newJ = j + y;
        dfs(grid,newI,newJ);
    }
    return;
}
