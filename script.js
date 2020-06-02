function createChessBoard() {

    const x=8;
    const y=8;
    
    const chessBoard = document.getElementById("chessBoard");
    
    for (let i=0; i<y; i++){
        const row = chessBoard.appendChild(document.createElement("div"));
        for (let j=0; j<x; j++){
            row.appendChild(document.createElement("span"));
        }  
    }
}
    window.onload = createChessBoard;"\n"