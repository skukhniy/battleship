import { displayController, dynamicController } from './controller';
import { flipShip, initOffset } from './DOM';

function createGridBlocks(container) {
  for (let i = 1; i < 101; i++) {
    const blockDiv = document.createElement('div');
    blockDiv.classList.add('grid_block', 'dropzone');
    blockDiv.id = `grid${String(i)}`;
    // const openDiv = document.createElement('div');
    // openDiv.className = 'open_block';
    // blockDiv.appendChild(openDiv);
    container.appendChild(blockDiv);
  }
}

function createShip(num, numWritten, count) {
  const numString = String(num);
  const counterString = String(count);

  const ship1block = document.createElement('div');
  ship1block.classList.add('ship_block');

  // create other divs, select/counter etc
  const blockSelect = document.createElement('div');
  blockSelect.id = `${numWritten}BlockSelect`;
  blockSelect.classList = 'blockSelect';
  const blockAmt = document.createElement('div');
  blockAmt.id = `${numWritten}BlockAmt`;
  blockAmt.classList = 'blockAmt';
  const counter = document.createElement('h2');
  counter.classList = 'counter';
  counter.id = `counter${numString}`;
  counter.innerHTML = `x${counterString}`;

  const ship = document.createElement('div');
  // ship2.id = `2-${String(i)}`;
  ship.classList.add(`ship_${numString}_block`, 'horizontal');
  if (count > 0) {
    ship.setAttribute('draggable', true);
  }
  ship.setAttribute('ship', true);
  ship.setAttribute('size', num);

  // create blocks for the ship
  for (let i = 1; i < num + 1; i++) {
    const ship1blockclone = ship1block.cloneNode(true);
    ship.appendChild(ship1blockclone);
  }
  // append elements
  blockAmt.appendChild(counter);
  blockSelect.appendChild(blockAmt);
  blockSelect.append(ship);
  displayController.shipSelectContainer.appendChild(blockSelect);
}

function createShipSelection(countArray) {
  createShip(1, 'one', countArray[1]);
  createShip(2, 'two', countArray[2]);
  createShip(3, 'three', countArray[3]);
  createShip(4, 'four', countArray[4]);
  const shipsSelector = dynamicController()[1];
  initOffset(shipsSelector);
  flipShip(shipsSelector);
}

function deleteShipSelection() {
  const parent = displayController.shipSelectContainer;
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export { createGridBlocks, createShipSelection, deleteShipSelection };
