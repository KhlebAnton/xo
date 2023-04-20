let players = ['x', 'o'];
let activePlayer = 0;
let board;

function createGameBoard() {
  return [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
    ];
}

function checkWin() {
  for (let i = 0; i < 3; i++) {
    if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      return true;
    }
  }
  for (let i = 0; i < 3; i++) {
    if (board[0][i] !== '' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      return true;
    }
  }
  if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return true;
  }
  if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    return true;
  }

  return false;
}

function startGame() {
  board = createGameBoard();
  renderBoard(board);

}

function click(a, b) {
  
  board[a][b] = players[activePlayer];
  renderBoard(board);
  if (checkWin(board)) {
    showWinner(activePlayer)
  }
  activePlayer = (activePlayer + 1) % players.length;

    
}
