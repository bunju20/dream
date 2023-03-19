/*
I:
O:
C:
2 <= n <= 100
player is 1 or 2.
0 <= row, col < n
(row, col) are unique for each different call to move.
At most n2 calls will be made to move.

E: x

ds: 
algo: ...dp?

solution:

121 -> 
121 -> 
121 ->
lll

move해서 넣을때마다 맨 끝에 그 행에 있는 0과 1의 갯수를 저장해놓는다.


time: O(N)
space: O(N^2)

*/

var TicTacToe = function(n) {
    this.ar = Array.from( Array(n+1) ,() => Array(n+1).fill(0));
    this.n = n;
    this.ar[n][n] = [0,0];
    this.up = [0,0];
    this.down = [0,0];
    for(let i = 0; i < n; i++){
        this.ar[n][i] = [0,0];
        this.ar[i][n] = [0,0];
    }
};

TicTacToe.prototype.move = function(row, col, player) {
    this.ar[col][row] = player;
    this.ar[this.n][row][player-1]++;
    this.ar[col][this.n][player-1]++;
    if(row === col)this.down[player-1]++;
    if(col === this.n - row - 1)this.up[player-1]++;;
    

    for(let i = 0; i < this.n; i++){
        let curPlay =  this.ar[this.n][i];
        if(curPlay[0] < this.n && curPlay[1] < this.n)continue;
        return (curPlay[0] >= this.n) ? 1 : 2;
    }
    for(let i = 0; i < this.n; i++){
        let curPlay =  this.ar[i][this.n];
        if(curPlay[0] < this.n && curPlay[1] < this.n)continue;
        return (curPlay[0] >= this.n) ? 1 : 2;
    }
    if(this.down[0] >= this.n)return 1;
    else if(this.down[1] >= this.n)return 2;
    
    if(this.up[0] >= this.n)return 1;
    else if(this.up[1] >= this.n)return 2;
    
    
    return 0;
};