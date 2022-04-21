/* eslint-disable no-param-reassign */
import { displayController, dynamicController } from './controller';
import { createGridBlocks, createShipSelection } from './render';
import initOffset from './DOM';

createGridBlocks(displayController.boardContainer);
createShipSelection(displayController.shipSelectContainer);
console.log(dynamicController()[1]);
initOffset(dynamicController()[1]);

let dragged;
let activeGrids;
const offset = 0;

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

// console.log(nodes);
// if (nodes[3]) {
//   nodes[3].addEventListener('mouseenter', (e) => {
//     e.target.style.background = 'red';
//     offset = -1;
//   });
// }

// function checkPosition(ship, e) {
//   // the array which holds the addition grid elements
//   const elemArray = [];
//   const shipSize = checkSize(ship);
//   let offset = 0;
//   const child = ship.childNodes;
//   console.log(child);
//   if (child[0]) child[0].addEventListener('mouseenter', () => (offset = 0));
//   if (child[1]) child[1].addEventListener('mouseenter', () => (offset = -1));
//   if (child[2]) child[2].addEventListener('mouseenter', () => (offset = -2));
//   if (child[3]) child[3].addEventListener('mouseenter', () => (offset = -3));
//   console.log(offset);
// }

// function checkPosition(ship, e) {
//   // the array which holds the addition grid elements
//   const elemArray = [];
//   const shipSize = checkSize(ship);
//   // init variables for gridID's and the modifier(moving up or to the left etc.)
//   let modifier = 0;
//   let secondGridID = 0;
//   let thirdGridID = 0;
//   let fourthGridID = 0;
//   if (shipSize === 1) {
//     return undefined;
//   }
//   if (isVertical(ship)) {
//     modifier = 10;
//   } else {
//     modifier = 1;
//   }
//   if (shipSize >= 2) {
//     secondGridID = grabGridID(e) + modifier;
//     const secondGrid = document.getElementById(`grid${String(secondGridID)}`);
//     elemArray.push(secondGrid);
//   } if (shipSize >= 3) {
//     thirdGridID = secondGridID + modifier;
//     const thirdGrid = document.getElementById(`grid${String(thirdGridID)}`);
//     elemArray.push(thirdGrid);
//   } if (shipSize >= 4) {
//     fourthGridID = thirdGridID + modifier;
//     const fourthGrid = document.getElementById(`grid${String(fourthGridID)}`);
//     elemArray.push(fourthGrid);
//   }
//   return (elemArray);
// }

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
      checkPosition(dragged, e);
    }
  }
});
// // changes the grid to red when a ship is dragged over it
// document.addEventListener('dragenter', (e) => {
//   // console.log('DRAG ENTER');
//   if (e.target.classList.contains('dropzone')) {
//     e.target.style.background = 'red';
//     if (checkSize(dragged) > 1) {
//       activeGrids = [e.target.id];
//       console.log(checkPosition(dragged, e.target))
//       checkPosition(dragged, e.target).forEach((elem) => {
//         console.log(elem);
//         elem.style.background = 'red';
//         activeGrids.push(elem.id);
//       });
//     }
//   }
// });

document.addEventListener('dragover', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('dropzone')) {
    e.target.style.background = 'red';
  }
});

// removes the background color when the ship leaves this grid area
document.addEventListener('dragleave', (e) => {
  // console.log('DRAG LEAVE');
});

document.addEventListener('drop', (e) => {
  console.log('DROP');
  e.preventDefault();
  if (e.target.classList.contains('dropzone')) {
    dragged.parentNode.removeChild(dragged);
    e.target.appendChild(dragged);
    e.target.style.background = 'none';
  }
});

export default checkSize;
