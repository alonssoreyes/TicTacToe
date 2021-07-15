const TicTacToe = {
    
    setup:function(){
        this.player1 = {
            name:"Cross",
            symbol:"X"
        };
        this.player2 = {
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
        this.currentPlayer = Math.floor(Math.random() * 2)== 0 ? this.player1 : this.player2;
        this.play();
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
          console.log(printedBoard)
          console.log("")

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
            // Diagonals
            board[0][0] === symbol &&
            board[1][1] === symbol &&
            board[2][2] === symbol,
            board[0][2] === symbol &&
            board[1][1] === symbol &&
            board[2][0] === symbol,
        ].includes(true)

    },
    playerTurn: function (player) {
        
        while (true) {
          let currentPosition = [Math.floor(Math.random() * 3), Math.floor(Math.random() * 3)];
          if (this.board[currentPosition[0]][currentPosition[1]] == "") {
            this.board[currentPosition[0]][currentPosition[1]] = player.symbol;
            this.printBoard(this.board);
            if (this.checkWin(player.symbol, this.board)) {
              console.log(this.currentPlayer.name + " win!");
              this.playAgainDialogue();
            } else if (this.isDraw(this.board)) {
              console.log("It's a draw");
              this.playAgainDialogue();
            }
            this.currentPlayer =
              this.currentPlayer == this.player1 ? this.player2 : this.player1;
            break;
          }
          continue;
        }
      },
    play: function() {

        while(!this.checkWin(this.player1.symbol, this.board) && !this.checkWin(this.player2.symbol, this.board) && !this.isDraw(this.board)){
            this.sleep(500);
            this.playerTurn(this.currentPlayer);
        }
    },
    isDraw: function(board) { 
        return (
            !this.checkWin("X", board) &&
            !this.checkWin("O", board) && 
            !this.board.some((row) => row.includes(""))
          );
    },
    sleep : function (delay) {
        const start = new Date().getTime();
        while (new Date().getTime() < start + delay);
    },
    playAgainDialogue: function () {
        console.log("Type node src/TicTacToe.js to play again");
      },
}
TicTacToe.setup();
module.exports = TicTacToe;