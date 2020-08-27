// https://leetcode.com/problems/surrounded-regions/
// https://medium.com/swlh/how-to-solve-any-code-challenge-or-algorithm-c66e0bed9dc9
var solve = function (board) {
  // Represents any connections with border Os
  let connection = [];
  board.forEach((row, x) => {
    row.forEach((char, y) => {
      if (char === 'O' && isOnSide(x, y)) {
        check(x, y);
      }
    });
  });
  function isOnSide(x, y) {
    return (
      x === 0 || y === 0 || x === board.length - 1 || y === board[x].length - 1
    );
  }

  function check(x, y) {
    board[x][y] = '1';
    if (x - 1 >= 0 && board[x - 1][y] === 'O') {
      check(x - 1, y);
    }
    if (x + 1 < board.length && board[x + 1][y] === 'O') {
      check(x + 1, y);
    }
    if (x - 1 >= 0 && board[x][y - 1] === 'O') {
      check(x, y - 1);
    }
    if (x + 1 < board.length && board[x][y + 1] === 'O') {
      check(x, y + 1);
    }
  }
  board.forEach((row, x) => {
    row.forEach((char, y) => {
      if (char === '1') {
        board[x][y] = 'O';
      } else {
        board[x][y] = 'X';
      }
    });
  });
};
