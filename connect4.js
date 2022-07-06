/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

let WIDTH = 7;
let HEIGHT = 6;

let currPlayer = 1; // active player: 1 or 2
let board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */
function makeBoard() {

  // Create Rows
  for (let i = 0; i < HEIGHT; i++) {
    board.push([]);
  }

  // Create Columns
  for (let row of board) {
    for (let i = 0; i < WIDTH; i++) {
      row.push(null);
    }
  }
}

/** makeHtmlBoard: make HTML table and row of column tops. */
function makeHtmlBoard() {
  const htmlBoard = document.getElementById('board');

  // Create a tr element for the top of the board for clicking
  const top = document.createElement("tr");
  top.setAttribute("id", "column-top");
  top.addEventListener("click", handleClick);

  //  Add correct number of td elements and give them unique ids
  for (let x = 0; x < WIDTH; x++) {
    let headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);
  }
  htmlBoard.append(top);

  /**
   Create game board.  Each td is given a unique id of its y-x coordinate.
   */
  for (let y = 0; y < HEIGHT; y++) {
    const row = document.createElement("tr");
    for (let x = 0; x < WIDTH; x++) {
      const cell = document.createElement("td");
      cell.setAttribute("id", `${y}-${x}`);
      row.append(cell);
    }
    htmlBoard.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */
function findSpotForCol(x) {
  // First check if column is full
  if (board[0][x] !== null) { return null; }

  for (let i = 0; i < HEIGHT; i++) {
    // Empty Column (this will catch on last iteration of the loop)
    if (i === HEIGHT - 1) {
      return HEIGHT - 1;

      // Check if next row is empty, if not, we've found the correct row
    } else {
      if (board[i + 1][x] !== null) { return i; }
    }
  }
}

/** placeInTable: update DOM to place piece into HTML table of board */
function placeInTable(y, x) {
  const chip = document.createElement('div');
  chip.classList.add('piece', `p${currPlayer}`);

  const destinationCell = document.getElementById(`${y}-${x}`);
  destinationCell.appendChild(chip);
}

/** endGame: announce game end */
function endGame(msg) {
  if (msg === '') {
    window.alert('Tie game!');
  } else {
    window.alert(msg);
  }
}

/** handleClick: handle click of column top to play piece */
function handleClick(evt) {
  // get x from ID of clicked cell
  const x = +evt.target.id;

  // get next spot in column (if none, ignore click)
  const y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // place piece in board and add to HTML table
  placeInTable(y, x);
  board[y][x] = currPlayer;

  // check for win
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} won!`);
  }

  // check for tie (entire board filled)
  if (board.every(row => row.every(cell => cell !== null))) { endGame(); }


  // switch players
  (currPlayer === 1) ? currPlayer = 2 : currPlayer = 1;
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */
function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }
  /* Iterate through every cell and from that cell create an array of coords
      representing a line of cells extending from the cell being checked to each
      direction:  horiz (to the right), vert (downward), diagDR (diagonally downward-right),
      and diagDL (diagonally downward-left).
  */
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

makeBoard();
makeHtmlBoard();