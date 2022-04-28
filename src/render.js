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

// creates the ship selection screen & adds DOM logic
function createShipSelection(countArray) {
  createShip(1, 'one', countArray[1]);
  createShip(2, 'two', countArray[2]);
  createShip(3, 'three', countArray[3]);
  createShip(4, 'four', countArray[4]);
  const shipsSelector = dynamicController().ships;
  initOffset(shipsSelector);
  flipShip(shipsSelector);
}

// empties all the children in the ship select screen
function deleteShipSelection() {
  const parent = displayController.shipSelectContainer;
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// clear the background for every block in the grid
function clearGrid(removeShips = false, removeBlockZones = false) {
  const selector = displayController.board;
  const children = selector.childNodes;
  children.forEach((childElem) => {
    childElem.style.background = 'none';
    if (removeBlockZones || removeShips) {
      childElem.classList.remove('blockedzone');
      childElem.classList.add('dropzone');
      if (removeShips) {
        childElem.innerHTML = '';
        deleteShipSelection(); // rerender ship select
        createShipSelection([0, 4, 3, 2, 1]);
      }
    }
  });
}

// remove a ship elem and its shipzone class from the board
function removeShip(parent, child) {
  const activeGrids = JSON.parse(child.dataset.activegrids);
  activeGrids.forEach((id) => {
    const selector = document.getElementById(`grid${id}`);
    selector.classList.remove('shipzone');
    selector.classList.add('dropzone');
  });
  parent.removeChild(child);
}

// grab id and turn it into an INT
function grabGridID(e) {
  let gridID = e.id.replace(/[^0-9]/g, '');
  gridID = parseInt(gridID, 10);
  return (gridID);
}

// get array of grids that contain ships
function getShipZones() {
  const shipZoneArray = [];
  displayController.board.childNodes.forEach((grid) => {
    if (grid.classList.contains('shipzone')) {
      shipZoneArray.push(grid);
    }
  });
  return (shipZoneArray);
}

// return array of elements that will be included in the blocked zone
function getBlockedZones(elemArray) {
  const blockedArray = []; // collect elements for the blocked grids
  let borderLeft = false; // bool to check if a ship grid is on the left or right border
  let borderRight = false;
  // loop through the grid spaces where the ship is
  elemArray.forEach((elem) => {
    const elemID = grabGridID(elem);
    if (((elemID % 10) - 1) === 0) { borderLeft = true; } // check if ship is placed on the border
    if (elemID % 10 === 0) { borderRight = true; }
    const offsetModifiers = [-10, 0, 10]; // modifiers go up and down the grids
    // for each modifier, use a for loop to append blocked grids to the blocked array
    offsetModifiers.forEach((modifier) => {
      // i will range from -1 to 1 and will correspond to the left middle and right
      for (let i = -1; i < 2; i++) {
        // makesure that grids outside of the border arent added
        if (!(((i === 1) && (borderRight)) || ((i === -1) && (borderLeft)))) {
          let blockedID = elemID + modifier;
          blockedID += i;
          const blockedGrid = document.getElementById(`grid${String(blockedID)}`);
          // checks to make sure the blockedGrid isnt already in the array, or the ship grids
          // make sure that no grids are added outside of the container (>1 or <100)
          if (!blockedArray.includes(blockedGrid) && !elemArray.includes(blockedGrid)
           && blockedID <= 100 && blockedID >= 1) {
            blockedArray.push(blockedGrid);
          }
        }
      }
    });
  });
  return blockedArray;
}

// add blocked class to grids
function blockZones(blockedArray) {
  blockedArray.forEach((blockedGrid) => {
    blockedGrid.classList.remove('dropzone');
    blockedGrid.classList.add('blockedzone');
  });
}

// sets DOM for reset button
function reset(btnSelector) {
  btnSelector.addEventListener('click', () => {
    clearGrid(true);
    displayController.shipSelectContainer.dataset.counter = JSON.stringify([0, 4, 3, 2, 1]);
    displayController.board.dataset.history = JSON.stringify([]);
  });
}

// sets DOM for undo button
function undo(btnSelector) {
  btnSelector.addEventListener('click', () => {
    const historyArray = JSON.parse(displayController.board.dataset.history);
    const countArray = JSON.parse(displayController.shipSelectContainer.dataset.counter);
    if (historyArray.length > 0) {
      console.log(historyArray);
      const lastID = historyArray.pop();

      const gridSelector = document.getElementById(`grid${lastID}`);
      const shipsSelector = gridSelector.firstChild;
      const shipSize = shipsSelector.getAttribute('size');

      countArray[shipSize] += 1;

      deleteShipSelection();
      createShipSelection(countArray);
      removeShip(gridSelector, shipsSelector);
      clearGrid(false, true);
      const shipZones = getShipZones();
      blockZones(getBlockedZones(shipZones));

      displayController.board.dataset.history = JSON.stringify(historyArray);
      displayController.shipSelectContainer.dataset.counter = JSON.stringify(countArray);
    }
  });
}

// setsDOM for play button
function play(btnSelector) {
  btnSelector.addEventListener('click', () => {
    // eslint-disable-next-line prefer-destructuring
    const counter = displayController.shipSelectContainer.dataset.counter;
    const counterCheck = JSON.stringify([0, 0, 0, 0, 0]);
    console.log(counter);
    console.log(counterCheck);
    if (counter === counterCheck) {
      console.log('Play');
    } else {
      alert('Please place all ships on the grid board before continuing.');
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

  const playBtn = document.createElement('div');
  playBtn.id = 'play_btn';
  playBtn.classList = 'board_btn';
  const playString = document.createElement('p');
  playString.innerHTML = 'Play';
  playBtn.appendChild(playString);
  play(playBtn);
  btnContainer.appendChild(playBtn);

  displayController.boardContainer.appendChild(btnContainer);
}

export {
  createGridBlocks, createShipSelection, deleteShipSelection,
  createBoardBtns, clearGrid, blockZones, getBlockedZones,
};
