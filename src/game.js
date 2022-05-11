import { ship, gameboard, player } from './factories';
import { displayController, dynamicController } from './controller';
import { attackDOM } from './DOM';

function getExportBoard(board) {
  const exportArray = [];
  board.childNodes.forEach((grid) => {
    if (grid.hasChildNodes()) {
      exportArray.push(grid.firstChild.cloneNode(true));
    }
  });
  return exportArray;
}

const game = (() => {
// init boards
  const playerBoardElem = displayController.board;
  const cpuBoardElem = dynamicController().cpuBoard;
  const playerBoard = gameboard(true, getExportBoard(playerBoardElem));
  console.log(dynamicController().cpuBoard);
  console.log(getExportBoard(cpuBoardElem));
  const cpuBoard = gameboard(false, getExportBoard(cpuBoardElem));
  const human = player();
  const cpu = player();
  playerBoardElem.style.cursor = 'crosshair';
  cpuBoardElem.style.cursor = 'crosshair';
  attackDOM([playerBoardElem, playerBoard], [cpuBoardElem, cpuBoard], human, cpu);

// player 1 attacks first
// change current turn
// player 2 attacks
// add func to check for end of game
});

export { getExportBoard, game };
