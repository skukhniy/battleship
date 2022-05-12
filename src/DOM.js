/* eslint-disable no-param-reassign */
import { displayController, dynamicController } from './controller';
// eslint-disable-next-line import/no-cycle
import { renderShipSelection } from './dragndrop_render';

// playButton DOM
function playButton() {
  displayController.playButton.addEventListener('click', () => {
    displayController.playButton.classList.add('hidden');
    renderShipSelection();
  });
}

// adds offset element so that the specific block will be recorded
function initOffset(ships) {
  ships.forEach((ship) => {
    const child = ship.children;
    if (child[0]) child[0].addEventListener('mouseenter', () => (ship.setAttribute('offset', 0)));
    if (child[1]) child[1].addEventListener('mouseenter', () => (ship.setAttribute('offset', -1)));
    if (child[2]) child[2].addEventListener('mouseenter', () => (ship.setAttribute('offset', -2)));
    if (child[3]) child[3].addEventListener('mouseenter', () => (ship.setAttribute('offset', -3)));
  });
}

// changes class to flip the ship
function flipShip() {
  const shipsSelector = dynamicController().ships;
  shipsSelector.forEach((ship) => {
    ship.addEventListener('click', () => {
      // makes sure that placed ships cant flipx
      if (!ship.classList.contains('dropped')) {
        if (ship.classList.contains('horizontal')) {
          ship.classList.remove('horizontal');
          ship.classList.add('vertical');
        } else {
          ship.classList.remove('vertical');
          ship.classList.add('horizontal');
        }
      }
    });
  });
}

// add logic to mark recieved attacks
function markAttack(humanBoard, cpuBoard, human, cpu) {
  cpuBoard[0].childNodes.forEach((grid) => {
    grid.addEventListener('click', () => {
      let id = grid.id.replace(/[^0-9]/g, '');
      id = parseInt(id, 10);
      if (!cpuBoard[1].attackedGrids.includes(id)) {
        cpuBoard[1].recieveAttack(id);
        // check if game is over
        if (cpuBoard[1].isSunk()) {
          alert('GameOver');
        }
        humanBoard[1].recieveAttack(cpu.cpuAttack(humanBoard[1]));
        // check if game is over
        if (humanBoard[1].isSunk()) {
          alert('GameOver');
        }
      }
    });
  });
}

// mark attacks during game
function attackDOM(board, cpuBoard, player, cpu) {
  // disable ships from click
  Array.from(dynamicController().shipsDropped).forEach((block) => {
    block.style.pointerEvents = 'none';
  });
  markAttack(board, cpuBoard, player, cpu);
  // markAttack(cpuboard, board);
}

export {
  initOffset, flipShip, attackDOM, playButton,
};
