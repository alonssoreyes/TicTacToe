const TicTacToe = {
    
    setup:function(){
        this.PLAYER1 = {
            name:"Cross",
            symbol:"X"
        };
        this.PLAYER2 = {
            name:"Naughts",
            symbol:"O"
        };
        this.startAgain();
    },

    startAgain:function(){
        this.board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ]
        this.currentPlayer = Math.floor(Math.random() * 2)== 0 ? this.PLAYER1 : this.PLAYER2;
        this.printBoard(this.board)
    } ,

    printBoard: function(board){
        

          let printedBoard = "";

          // First row
          printedBoard += board[0][0] == "" ? "  " : ` ${board[0][0]}`;
          printedBoard += "|";
          printedBoard += board[0][1] == "" ? " " : `${board[0][1]}`;
          printedBoard += "|";
          printedBoard += board[0][2] == "" ? "  \n" : `${board[0][2]}\n`;
      
          // Filler
          printedBoard += "--|-|--\n";
      
          // Second row
          printedBoard += board[1][0] == "" ? "  " : ` ${board[1][0]}`;
          printedBoard += "|";
          printedBoard += board[1][1] == "" ? " " : `${board[1][1]}`;
          printedBoard += "|";
          printedBoard += board[1][2] == "" ? "  \n" : `${board[1][2]}\n`;
      
          // Filler
          printedBoard += "--|-|--\n";
      
          // Third row
          printedBoard += board[2][0] == "" ? "  " : ` ${board[2][0]}`;
          printedBoard += "|";
          printedBoard += board[2][1] == "" ? " " : `${board[2][1]}`;
          printedBoard += "|";
          printedBoard += board[2][2] == "" ? "  \n" : `${board[2][2]}\n`;
          return printedBoard;
    },
    checkWin: function (symbol,board){
        return [
            // Columns
            board[0][0] === symbol &&
            board[1][0] === symbol &&
            board[2][0] === symbol,
            board[0][1] === symbol &&
            board[1][1] === symbol &&
            board[2][1] === symbol,
            board[0][2] === symbol &&
            board[1][2] === symbol &&
            board[2][2] === symbol,
            // Rows
            board[0][0] === symbol &&
            board[0][1] === symbol &&
            board[0][2] === symbol,
            board[1][0] === symbol &&
            board[1][1] === symbol &&
            board[1][2] === symbol,
            board[2][0] === symbol &&
            board[2][1] === symbol &&
            board[2][2] === symbol,
        ].includes(true)

    },
    draw: function() { 

    }
}

module.exports = TicTacToe;