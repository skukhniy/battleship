/* eslint-disable no-param-reassign */
import { displayController, dynamicController } from './controller';
import { flipShip, initOffset } from './DOM';

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
  const shipsSelector = dynamicController().ships;
  initOffset(shipsSelector);
  flipShip(shipsSelector);
}

function deleteShipSelection() {
  const parent = displayController.shipSelectContainer;
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
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

function reset(btnSelector) {
  btnSelector.addEventListener('click', () => {
    clearGrid(true);
    displayController.shipSelectContainer.dataset.counter = JSON.stringify([0, 4, 3, 2, 1]);
    displayController.board.dataset.history = JSON.stringify([]);
  });
}

function undo(btnSelector) {
  btnSelector.addEventListener('click', () => {
    const historyArray = JSON.parse(displayController.board.dataset.history);
    const countArray = JSON.parse(displayController.shipSelectContainer.dataset.counter);
    if (historyArray.length > 0) {
      console.log(historyArray);
      const lastAction = historyArray.pop();
      const lastID = lastAction[0];
      const blockedZones = lastAction[1];

      const gridSelector = document.getElementById(`grid${lastID}`);
      const shipsSelector = gridSelector.firstChild;
      const shipSize = shipsSelector.getAttribute('size');

      countArray[shipSize] += 1;
      console.log(blockedZones);
      blockedZones.forEach((gridID) => {
        const selector = document.getElementById(`grid${gridID}`);
        selector.classList.remove('blockedzone');
        selector.classList.add('dropzone');
      });

      deleteShipSelection();
      createShipSelection(countArray);
      gridSelector.removeChild(shipsSelector);

      displayController.board.dataset.history = JSON.stringify(historyArray);
      displayController.shipSelectContainer.dataset.counter = JSON.stringify(countArray);
    }
  });
}

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

// creates undo/reset buttons that go under the grid board
function createBoardBtns() {
  const btnContainer = document.createElement('div');
  btnContainer.id = 'board_btn_container';

  const undoBtn = document.createElement('div');
  undoBtn.id = 'undo_btn';
  undoBtn.classList = 'board_btn';
  const undoString = document.createElement('p');
  undoString.innerHTML = 'Undo';
  undoBtn.appendChild(undoString);
  undo(undoBtn); // add Dom Func
  btnContainer.appendChild(undoBtn);

  const resetBtn = document.createElement('div');
  resetBtn.id = 'reset_btn';
  resetBtn.classList = 'board_btn';
  const resetString = document.createElement('p');
  resetString.innerHTML = 'Reset';
  resetBtn.appendChild(resetString);
  reset(resetBtn); // add DOM function
  btnContainer.appendChild(resetBtn);

  console.log(btnContainer);
  displayController.boardContainer.appendChild(btnContainer);
}

export {
  createGridBlocks, createShipSelection, deleteShipSelection, createBoardBtns, clearGrid,
};
