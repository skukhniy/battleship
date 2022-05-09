function getExportBoard(board) {
  const exportArray = [];
  board.childNodes.forEach((grid) => {
    if (grid.classList.contains('shipzone')) {
      if (grid.hasChildNodes()) {
        exportArray.push(grid.firstChild.cloneNode(true));
      }
    }
  });
  return exportArray;
}

// init boards
// player 1 attacks first
// change current turn
// player 2 attacks
// add func to check for end of game

export default getExportBoard;
