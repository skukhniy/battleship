/* eslint-disable no-param-reassign */
import { displayController, dynamicController } from './controller';
import { createGridBlocks, createShipSelection } from './render';
import initOffset from './DOM';

createGridBlocks(displayController.boardContainer);
createShipSelection(displayController.shipSelectContainer);
initOffset(dynamicController()[1]);

let dragged;
let activeGrids;

function grabGridID(e) {
  let gridID = e.id.replace(/[^0-9]/g, '');
  gridID = parseInt(gridID, 10);
  return (gridID);
}

function checkSize(ship) {
  const sizeTotal = ship.offsetHeight + ship.offsetWidth;
  let shipSize = 0;
  if (sizeTotal === 100) {
    shipSize = 1;
  } else if (sizeTotal === 150) {
    shipSize = 2;
  } else if (sizeTotal === 200) {
    shipSize = 3;
  } else if (sizeTotal === 250) {
    shipSize = 4;
  } else {
    alert(`Error Issue with ship size ${shipSize}`);
  }
  return shipSize;
}

function isVertical(block) {
  if (block.offsetHeight > block.offsetWidth) {
    return true;
  }
  return false;
}

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
  if (shipSize === 1) {
    return undefined;
  }
  if (isVertical(ship)) {
    modifier = 10;
    offset *= 10;
  } else {
    modifier = 1;
  }
  if (offset < 0) {
    firstGridID += offset;
    console.log(firstGridID);
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

document.addEventListener('drag', (e) => {
});

// registers the dragging ship element
document.addEventListener('dragstart', (e) => {
  dragged = e.target;
});

// // changes the grid to red when a ship is dragged over it
// document.addEventListener('dragenter', (e) => {
//   // console.log('DRAG ENTER');
// });

// changes the grid to red when a ship is dragged over it
document.addEventListener('dragenter', (e) => {
  // console.log('DRAG ENTER');
  if (e.target.classList.contains('dropzone')) {
    e.target.style.background = 'red';
    if (checkSize(dragged) > 1) {
      activeGrids = [e.target.id];
      checkPosition(dragged, e.target).forEach((elem) => {
        elem.style.background = 'red';
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
  // console.log('DRAG LEAVE');
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

// // removes the background color when the ship leaves this grid area
// document.addEventListener('dragleave', (e) => {
//   // console.log('DRAG LEAVE');
//   if (e.target.classList.contains('dropzone')) {
//     if (!activeGrids.includes(e.target.id)) {
//       e.target.style.background = 'none';
//     }
//     if (checkSize(dragged) > 1) {
//       checkPosition(dragged, e.target).forEach((elem) => {
//         if (!activeGrids.includes(elem.id)) {
//           elem.style.background = 'none';
//         }
//       });
//     }
//   }
// });

document.addEventListener('drop', (e) => {
  console.log('DROP');
  e.preventDefault();
  if (e.target.classList.contains('dropzone')) {
    const grids = checkPosition(dragged, e.target);
    grids.forEach((grid)=>{
      grid.style.background = 'none';
    });
    dragged.parentNode.removeChild(dragged);
    grids[0].appendChild(dragged);
    //dragged.style.border = 'none';
    dragged.classList.add('dropped');
  }
});

export default checkSize;
