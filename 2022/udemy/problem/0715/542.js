/*
time:O(N)
space: O(N)
*/
var updateMatrix = function(mat) {
    let queue = [];
    
    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[0].length; j++) {        
            if (mat[i][j] === 1) mat[i][j] = Infinity;
            else queue.push([i, j, 0]);
        }
    }
    bfs(queue,mat);
    return mat;
};

function bfs(queue,mat){
    let dir = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    while(queue.length) {
        let [i, j, dist] = queue.shift();
        if(mat[i][j] > dist) mat[i][j] = dist;
        for(let [x, y] of dir) {
            let newX = x + i;
            let newY = y + j;
            if(newX >= 0 && newX < mat.length && newY >= 0 && newY < mat[0].length) {
                if(mat[newX][newY] === Infinity) {
                    queue.push([newX, newY, dist + 1]);
                }
            }
        }
    }
}

/*
0 0 0
0 1 0
1 1 1

0 0 0
0 1 0
1 2 1


*/