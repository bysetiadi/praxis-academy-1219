function chessBoard(size){
    var s = size || 8;
    var board = "";
    for(var i = 0; i < s; i++){
        for(var j = 0; j < s; j++){
            board += (i + j) % 2 === 0 ? ' ' : '#';
        }
        board += '\n';
    }
    console.log(board);
}
chessBoard();