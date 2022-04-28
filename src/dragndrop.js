/* eslint-disable no-param-reassign */
import { displayController, dynamicController } from './controller';
import {
  deleteShipSelection, clearGrid, createShipSelection, blockZones, getBlockedZones,
} from './render';
// init variable for ship object, when being dragged
let dragged;
// array to hold ship counts
displayController.shipSelectContainer.dataset.counter = JSON.stringify([0, 4, 3, 2, 1]);
displayController.board.dataset.history = JSON.stringify([]);

// init array that hold active Grids, used to avoid overlap conflicts
let activeGrids;

// grab the html ID from any event element
function grabGridID(e) {
  let gridID = e.id.replace(/[^0-9]/g, '');
  gridID = parseInt(gridID, 10);
  return (gridID);
}

// check if a ship is vertical or horizontal
function isVertical(block) {
  if (block.classList.contains('vertical')) {
    return true;
  }
  return false;
}

// return an array of adjusted grid positions
function checkPosition(ship, e) {
  // the array which holds the addition grid elements
  let elemArray = [];
  const shipSize = ship.getAttribute('size');
  let offset = ship.getAttribute('offset');
  // init variables for gridID's and the modifier(moving up or to the left etc.)
  let modifier = 0;
  const currentGridID = grabGridID(e);
  let firstGridID = currentGridID;
  let secondGridID = 0;
  let thirdGridID = 0;
  let fourthGridID = 0;
  if (shipSize === 1) {
    return [e];
  }
  // for vertical ships, the grid goes up with -10, and down with +10, so the offset must be *10
  if (isVertical(ship)) {
    modifier = 10;
    offset *= 10;
  } else {
    modifier = 1;
    offset *= 1;
  }
  // init first Grid based on offset
  if (shipSize >= 1) {
    if (offset < 0) {
      firstGridID += offset;
    }
    const firstGrid = document.getElementById(`grid${String(firstGridID)}`);
    elemArray.push(firstGrid);
  }
  if (shipSize >= 2) {
    // init the second Grid ID & element
    secondGridID = firstGridID + modifier;
    const secondGrid = document.getElementById(`grid${String(secondGridID)}`);
    // check if ship passes the grid borders
    if ((firstGridID % 10 === 0 && !isVertical(ship))) {
      elemArray.push(null);
      // special if statement for the left side of the border
      // checks to see if the grids to the left of the active grid are smaller (ie on the left)
      if ((((((secondGridID % 10) - 1) === 0)) && !isVertical(ship)
      && (firstGridID < currentGridID))) {
        elemArray = [null];
        elemArray.push(secondGrid);
      }
    } else {
      elemArray.push(secondGrid); // if the grid doesnt pass any borders, push as is
    }
  } if (shipSize >= 3) {
    thirdGridID = secondGridID + modifier;
    const thirdGrid = document.getElementById(`grid${String(thirdGridID)}`);
    if (
      (secondGridID % 10 === 0 && !isVertical(ship)) || elemArray[elemArray.length - 1] === null) {
      elemArray.push(null);
      if ((((((thirdGridID % 10) - 1) === 0)) && !isVertical(ship)
      && (secondGridID < currentGridID))) {
        elemArray = [null];
        elemArray.push(thirdGrid);
      }
    } else {
      elemArray.push(thirdGrid);
    }
  } if (shipSize >= 4) {
    fourthGridID = thirdGridID + modifier;
    const fourthGrid = document.getElementById(`grid${String(fourthGridID)}`);
    if ((thirdGridID % 10 === 0 && !isVertical(ship)) || elemArray[elemArray.length - 1] === null) {
      elemArray.push(null);
      if ((((((fourthGridID % 10) - 1) === 0)) && !isVertical(ship)
      && (thirdGridID < currentGridID))) {
        elemArray = [null];
        elemArray.push(fourthGrid);
      }
    } else {
      elemArray.push(fourthGrid);
    }
  }
  // returns an array containing the elements for each grid below the ship.
  return (elemArray);
}

// return current num of dragged ship counter
function grabCounterNum(ship) {
  const counter = ship.parentNode.children[0].children[0];
  const counterNum = parseInt(counter.innerHTML.replace('x', ''), 10);
  return (counterNum);
}

// add/subtract to the dragged ship counter
function adjustCounter(ship, modifier) {
  const counter = ship.parentNode.children[0].children[0];
  const counterNum = grabCounterNum(ship);
  counter.innerHTML = `x${String(counterNum + modifier)}`;
}

function blockedZoneCheck(array) {
  let includesBlocked = false;
  array.every((elem) => {
    if (elem === null) {
      includesBlocked = true;
      return false;
    } if (elem.classList.contains('blockedzone')) {
      includesBlocked = true;
      return false;
    }
    return true;
  });
  return includesBlocked;
}

document.addEventListener('drag', () => {
});

// registers the dragging ship element
document.addEventListener('dragstart', (e) => {
  // console.log('dragstart');
  // assign dragging ship to a variable
  dragged = e.target;
  // check if ship is in ship select, then adjust counter
  if (dragged.parentNode.parentNode === displayController.shipSelectContainer) {
    adjustCounter(dragged, -1);
  }
  // set blocked grids to a light red
  dynamicController().blockedZones.forEach((blockedGrid) => {
    blockedGrid.style.background = 'rgba(222, 7, 7, 0.383)';
  });
});

// changes the grid to green when a ship is dragged over it
document.addEventListener('dragenter', (e) => {
  activeGrids = []; // init activeGrids array
  // only change background color for elements in the dropzone
  if (e.target.classList.contains('dropzone')) {
    // check to see if the current grids overlap a blockedZone
    const currentGrids = checkPosition(dragged, e.target);
    // if theres no overlap with blocked zones, change the grids to green
    // if there is an overlap, change extra grids to red
    currentGrids.forEach((elem) => {
      if (!blockedZoneCheck(currentGrids)) {
        elem.style.background = 'green';
      } else if (elem != null) {
        elem.style.background = 'rgba(222, 7, 7, 0.383)';
      }
      if (elem != null) {
        activeGrids.push(elem.id);
      }
    });
  }
});

document.addEventListener('dragover', (e) => {
  e.preventDefault();
});

// removes the background color when the ship leaves this grid area
document.addEventListener('dragleave', (e) => {
  // console.log('dragLEAVE');
  if (e.target.classList.contains('dropzone')) {
    if (!activeGrids.includes(e.target.id) && !e.target.classList.contains('blockedzone')) {
      e.target.style.background = 'none';
    }
    if (dragged.getAttribute('size') > 1) {
      checkPosition(dragged, e.target).forEach((elem) => {
        if (elem != null) {
          if (!activeGrids.includes(elem.id) && !elem.classList.contains('blockedzone')) {
            elem.style.background = 'none';
          }
        }
      });
    }
  }
});

document.addEventListener('drop', (e) => {
  // console.log('DROP');
  e.preventDefault();
  // execute if elem dropped on the grid board
  const grids = checkPosition(dragged, e.target);
  clearGrid();
  if (e.target.classList.contains('dropzone') && !blockedZoneCheck(grids)) {
    // grab counter and move history arrays from elem DOM
    const countArray = JSON.parse(displayController.shipSelectContainer.dataset.counter);
    const historyArray = JSON.parse(displayController.board.dataset.history);
    historyArray.push(grabGridID(grids[0])); // adds this current grid to list of moves
    displayController.board.dataset.history = JSON.stringify(historyArray);

    // grab active Ids and attach to ship DOM
    const gridIDs = [];
    grids.forEach((grid) => {
      grid.classList.remove('dropzone');
      grid.classList.add('shipzone');
      gridIDs.push(grabGridID(grid));
    });
    dragged.setAttribute('data-activeGrids', JSON.stringify(gridIDs));

    grids[0].appendChild(dragged); // add ship to board
    dragged.classList.add('dropped');
    dragged.setAttribute('draggable', false); // lock ship once its placed
    blockZones(getBlockedZones(grids)); // add blocked zones
    countArray[dragged.getAttribute('size')] -= 1; // adjust counter

    // return updated array to html data attrb
    displayController.shipSelectContainer.dataset.counter = JSON.stringify(countArray);
    deleteShipSelection(); // rerender ship select
    createShipSelection(countArray);

  // drop logic if ship dropped into the ship_select_container
  } else if (e.target.id === 'ship_select_container'
  || e.target.parentNode.id === 'ship_select_container'
  || (e.target.parentNode.getAttribute('ship') && e.target.parentNode.parentNode.id === 'ship_select_container')) {
    if (grabCounterNum(dragged) === 0) {
      dragged.parentNode.appendChild(dragged);
    }
    clearGrid();
    adjustCounter(dragged, 1);
  } else { adjustCounter(dragged, 1); }
});
