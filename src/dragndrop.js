/* eslint-disable no-param-reassign */
import { displayController, dynamicController } from './controller';
import {
  createBoardBtns, createGridBlocks, createShipSelection, deleteShipSelection,
} from './render';
import { clearGrid } from './DOM';
// init variable for ship object, when being dragged
let dragged;
// array to hold ship counts
const countArray = [0, 4, 3, 2, 1];
// init array that hold active Grids, used to avoid overlap conflicts
let activeGrids;

createBoardBtns();
createGridBlocks(displayController.board);
createShipSelection(countArray);

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
  const elemArray = [];
  const shipSize = ship.getAttribute('size');
  let offset = ship.getAttribute('offset');
  // init variables for gridID's and the modifier(moving up or to the left etc.)
  let modifier = 0;
  let firstGridID = grabGridID(e);
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
    if (firstGridID % 10 === 0 && !isVertical(ship)) {
      elemArray.push(null);
    } else {
      secondGridID = firstGridID + modifier;
      const secondGrid = document.getElementById(`grid${String(secondGridID)}`);
      elemArray.push(secondGrid);
    }
  } if (shipSize >= 3) {
    if (secondGridID % 10 === 0 && !isVertical(ship)) {
      elemArray.push(null);
    } else {
      thirdGridID = secondGridID + modifier;
      const thirdGrid = document.getElementById(`grid${String(thirdGridID)}`);
      elemArray.push(thirdGrid);
    }
  } if (shipSize >= 4) {
    if (thirdGridID % 10 === 0 && !isVertical(ship)) {
      elemArray.push(null);
    } else {
      fourthGridID = thirdGridID + modifier;
      const fourthGrid = document.getElementById(`grid${String(fourthGridID)}`);
      elemArray.push(fourthGrid);
    }
  }
  // returns an array containing the elements for each grid below the ship.
  return (elemArray);
}

// get array of blocked grids
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

// apply block to those grids
function blockZones(blockedArray) {
  blockedArray.forEach((blockedGrid) => {
    blockedGrid.classList.remove('dropzone');
    blockedGrid.classList.add('blockedzone');
  });
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
  // console.log('dragENTER');
  // init activeGrids array
  activeGrids = [];
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
    // make sure that ship cant be dropped if it overlaps a blocked zone
    // append dropped elem correctly
    grids[0].appendChild(dragged);
    dragged.classList.add('dropped');
    // lock ship once its placed
    dragged.setAttribute('draggable', false);
    blockZones(getBlockedZones(grids)); // add blocked zones
    countArray[dragged.getAttribute('size')] -= 1; // adjust counter
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
