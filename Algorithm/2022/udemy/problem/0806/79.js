let found;

var exist = function(board, word) {
    found = false;
    for(let r = 0; r < board.length; r++){
        for(let c = 0; c < board[0].length; c++){
            if(board[r][c] === word[0])
                backtrack(board, word, r, c, 0);
            if(found)break;
        }
    }
    return found;
};

var backtrack = function(board, word, r, c, cIdx){
    
    if(r < 0||r > board.length - 1||c < 0||c > board[0].length - 1|| board[r][c] !== word[cIdx]) return;
    
    if((cIdx == word.length-1) || (found)){
    found = true;
    return;
    }
    
    let curChar = board[r][c];
    board[r][c] = '*';
    
    backtrack(board, word, r-1, c, cIdx + 1);
    backtrack(board, word, r+1, c, cIdx + 1);
    backtrack(board, word, r, c-1, cIdx + 1);
    backtrack(board, word, r, c+1, cIdx + 1);
    
    board[r][c] = curChar;
    return;
}
