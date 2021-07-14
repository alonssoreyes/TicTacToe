const TicTacToe = { 
    printBoard: function(){
         this.board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
          ]

          let printedBoard = "";

          // First row
          printedBoard += this.board[0][0] == "" ? "  " : ` ${this.this.board[0][0]}`;
          printedBoard += "|";
          printedBoard += this.board[0][1] == "" ? " " : `${this.board[0][1]}`;
          printedBoard += "|";
          printedBoard += this.board[0][2] == "" ? "  \n" : `${this.board[0][2]}\n`;
      
          // Filler
          printedBoard += "--|-|--\n";
      
          // Second row
          printedBoard += this.board[1][0] == "" ? "  " : ` ${this.board[1][0]}`;
          printedBoard += "|";
          printedBoard += this.board[1][1] == "" ? " " : `${this.board[1][1]}`;
          printedBoard += "|";
          printedBoard += this.board[1][2] == "" ? "  \n" : `${this.board[1][2]}\n`;
      
          // Filler
          printedBoard += "--|-|--\n";
      
          // Third row
          printedBoard += this.board[2][0] == "" ? "  " : ` ${this.board[2][0]}`;
          printedBoard += "|";
          printedBoard += this.board[2][1] == "" ? " " : `${this.board[2][1]}`;
          printedBoard += "|";
          printedBoard += this.board[2][2] == "" ? "  \n" : `${this.board[2][2]}\n`;
          console.log(printedBoard)
          return printedBoard;
    }
}

module.exports = TicTacToe;