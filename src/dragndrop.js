/* eslint-disable no-param-reassign */
import { displayController, dynamicController } from './controller';
import { createGridBlocks, createShipSelection } from './render';

// init variable for ship object, when being dragged
let dragged;
let clone;
// array to hold ship counts
let countArray = [4, 3, 2, 1];
// init array that hold active Grids, used to avoid overlap conflicts
let activeGrids;

createGridBlocks(displayController.boardContainer);
createShipSelection();



// clear the background for every block in the grid
function clearGrid(controller) {
  const children = controller.childNodes;
  children.forEach((child) => {
    child.style.background = 'none';
  });
}

// grab the html ID from any event element
function grabGridID(e) {
  let gridID = e.id.replace(/[^0-9]/g, '');
  gridID = parseInt(gridID, 10);
  return (gridID);
}

// check the length of a ship (blocks 1-4)
function checkSize(ship) {
  const sizeTotal = ship.offsetHeight + ship.offsetWidth;
  console.log(sizeTotal);
  let shipSize = 0;
  if (sizeTotal === 100) {
    shipSize = 1;
  } else if (sizeTotal === 150) {
    shipSize = 2;
  } else if (sizeTotal === 200) {
    shipSize = 3;
  } else if (sizeTotal === 250) {
    shipSize = 4;
  } else { alert(`Error Issue with ship size ${shipSize}`); }
  return shipSize;
}

// check if a ship is vertical or horizontal
function isVertical(block) {
  if (block.offsetHeight > block.offsetWidth) {
    return true;
  }
  return false;
}

// return an array of adjusted grid positions
function checkPosition(ship, e) {
  // the array which holds the addition grid elements
  const elemArray = [];
  const shipSize = checkSize(ship);
  let offset = ship.getAttribute('offset');
  // init variables for gridID's and the modifier(moving up or to the left etc.)
  let modifier = 0;
  let firstGridID = grabGridID(e);
  let secondGridID = 0;
  let thirdGridID = 0;
  let fourthGridID = 0;
  // console.log(offset);
  // console.log(shipSize);
  // console.log(firstGridID);
  // console.log(ship);
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
  if (offset < 0) {
    firstGridID += offset;
    const firstGrid = document.getElementById(`grid${String(firstGridID)}`);
    elemArray.push(firstGrid);
  }
  if (shipSize >= 2) {
    secondGridID = firstGridID + modifier;
    const secondGrid = document.getElementById(`grid${String(secondGridID)}`);
    elemArray.push(secondGrid);
  } if (shipSize >= 3) {
    thirdGridID = secondGridID + modifier;
    const thirdGrid = document.getElementById(`grid${String(thirdGridID)}`);
    elemArray.push(thirdGrid);
  } if (shipSize >= 4) {
    fourthGridID = thirdGridID + modifier;
    const fourthGrid = document.getElementById(`grid${String(fourthGridID)}`);
    elemArray.push(fourthGrid);
  }
  // returns an array containing the elements for each grid below the ship.
  return (elemArray);
}

// get array of blocked grids
function getBlockedZones(elemArray) {
  // collect elements for the blocked grids
  const blockedArray = [];
  // loop through the grid spaces where the ship is
  elemArray.forEach((elem) => {
    const elemID = grabGridID(elem);
    const offsetModifiers = [-10, 0, 10];
    // for each modifier, use a for loop to append blocked grids to the blocked array
    offsetModifiers.forEach((modifier) => {
      for (let i = -1; i < 2; i++) {
        let blockedID = elemID + modifier;
        blockedID += i;
        const blockedGrid = document.getElementById(`grid${String(blockedID)}`);
        // checks to make sure the blockedGrid isnt already in the array, or the ship grids
        if (!blockedArray.includes(blockedGrid) && !elemArray.includes(blockedGrid)) {
          blockedArray.push(blockedGrid);
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

document.addEventListener('drag', (e) => {
});

// registers the dragging ship element
document.addEventListener('dragstart', (e) => {
  console.log('dragstart');
  // assign dragging ship to a variable
  dragged = e.target;
  clone = dragged.cloneNode(true);
  // check if ship is in ship select, then adjust counter
  if (dragged.parentNode.parentNode === displayController.shipSelectContainer) {
    adjustCounter(dragged, -1);
  }
  // console.log(counter.innerHTML);
  // set blocked grids to a light red
  dynamicController()[2].forEach((blockedGrid) => {
    blockedGrid.style.background = 'rgba(222, 7, 7, 0.383)';
  });
});

// changes the grid to green when a ship is dragged over it
document.addEventListener('dragenter', (e) => {
  console.log('dragENTER');
  console.log(dragged);
  // console.log(e.target);
  activeGrids = [];
  // only change background color for elements in the dropzone
  if (e.target.classList.contains('dropzone')) {
    e.target.style.background = 'green';
    if (checkSize(dragged) > 1) {
      // init activeGrids array if the ship is longer than 1 block;
      checkPosition(dragged, e.target).forEach((elem) => {
        elem.style.background = 'green';
        activeGrids.push(elem.id);
      });
    }
  }
});

document.addEventListener('dragover', (e) => {
  e.preventDefault();
});

// removes the background color when the ship leaves this grid area
document.addEventListener('dragleave', (e) => {
  console.log('dragLEAVE');
  // console.log(e.target);
  // console.log('active Grids');
  // console.log(activeGrids);
  if (e.target.classList.contains('dropzone')) {
    if (!activeGrids.includes(e.target.id)) {
      e.target.style.background = 'none';
    }
    if (checkSize(dragged) > 1) {
      checkPosition(dragged, e.target).forEach((elem) => {
        if (!activeGrids.includes(elem.id)) {
          elem.style.background = 'none';
        }
      });
    }
  }
});

document.addEventListener('drop', (e) => {
  console.log('DROP');
  console.log(dragged);
  e.preventDefault();
  // execute if elem dropped on the grid board
  if (e.target.classList.contains('dropzone')) {
    const grids = checkPosition(dragged, e.target);
    clearGrid(displayController.boardContainer);
    // check if counter for grabbed ship = 0, if 0 dont repopulate elem
    if (grabCounterNum(dragged) === 0) {
      console.log('counter == 0');
    } else {
      dragged.parentNode.appendChild(clone);
    }
    // append dropped elem correctly
    grids[0].appendChild(dragged);
    dragged.classList.add('dropped');
    dragged.setAttribute('draggable', false);
    // add blocked zones
    blockZones(getBlockedZones(grids));
  // drop logic if ship dropped into the ship_select_container
  } else if (e.target.id === 'ship_select_container'
  || e.target.parentNode.id === 'ship_select_container'
  || (e.target.parentNode.getAttribute('ship') && e.target.parentNode.parentNode.id === 'ship_select_container')) {
    if (grabCounterNum(dragged) === 0) {
      dragged.parentNode.appendChild(dragged);
    }
    clearGrid(displayController.boardContainer);
    adjustCounter(dragged, 1);
  } else { adjustCounter(dragged, 1); }
});

export default checkSize;
