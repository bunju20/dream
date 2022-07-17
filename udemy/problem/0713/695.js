/*
배열의 크기: N
time: O(N)
space: O(N)

*/


var maxAreaOfIsland = function(grid) {
    let max = 0;
     let curMax;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j]===1){
                curMax = dfs(grid,i,j);
                max = Math.max(max,curMax);
            }
        }
    }
    return max;
};

function dfs(grid,i,j){ //반환값: 넓이의 합.
    if( i<0||i>=grid.length||
        j<0||j>=grid[0].length||
        grid[i][j]===0)
        return 0;

        let area = 1; //한칸의 넓이.
        grid[i][j] = 0; //visited 대체
        let direct=[[0,-1],[1,0],[0,1],[-1,0]];

        for(let d = 0; d < 4; d++){
            let newI= i + direct[d][0];
            let newJ= j + direct[d][1];
            area += dfs(grid,newI,newJ); //바텀업
        }
        return area;
}