/* eslint-disable no-param-reassign */
import { displayController, dynamicController } from './controller';
import { deleteShipSelection, createShipSelection } from './render';

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

// clear the background for every block in the grid
function clearGrid(removeShips = false) {
  const selector = displayController.board;
  const children = selector.childNodes;
  children.forEach((childElem) => {
    childElem.style.background = 'none';
    if (removeShips) {
      childElem.classList.remove('blockedzone');
      childElem.classList.add('dropzone');
      childElem.innerHTML = '';
      deleteShipSelection(); // rerender ship select
      createShipSelection([0, 4, 3, 2, 1]);
    }
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

function reset(btnSelector) {
  btnSelector.addEventListener('click', () => {
    console.log('reset');
    clearGrid(true);
  });
}
export {
  initOffset, flipShip, clearGrid, reset,
};
