/*
I: 2d array
O: 2d array
C: 

m == image.length
n == image[i].length
1 <= m, n <= 50
0 <= image[i][j], color < 216
0 <= sr < m
0 <= sc < n

E:
if(ar[sr][sc] === color)return ar

ds:x
algo: dfs

solution:
//edge처리
dfs
return ar

function dfs{
    if(범위를 넘었거나 선택한 색상이 아니면)return;
    ar[curI][curJ] = newColor;
    for(네방향){
        [newI, newJ]
        dfs([newI, newJ],[new,origin],배열);
    }
    return;
}

N: 배열의 크기
time: O(N)
space:O(N) //콜스택

*/

var floodFill = function(image, sr, sc, newColor) {
    if(image[sr][sc] === newColor)return image;
    let curColor = image[sr][sc];
    dfs(sr,sc,image,curColor,newColor);
    
    return image;   
}

function dfs(x,y,image,curColor,newColor){
    if(x < 0 || x > image.length - 1 ||
        y < 0 || y > image[0].length - 1||
        image[x][y] !== curColor)return;

    image[x][y] = newColor;

    const direct = [[0,1],[1,0],[0,-1],[-1,0]];
    for(let i = 0; i <  4; i++){
        let newX = x + direct[i][0];
        let newY = y + direct[i][1];
        dfs(newX,newY,image,curColor,newColor)
    }

    return;
}