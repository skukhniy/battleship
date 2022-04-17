/* eslint-disable no-param-reassign */
import { displayController } from './controller';
import createGridBlocks from './render';

createGridBlocks(displayController.boardContainer);

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

document.addEventListener('drag', () => {

});

// registers the dragging ship element
document.addEventListener('dragstart', (e) => {
  dragged = e.target;
  console.log(dragged);
});

// changes the grid to red when a ship is dragged over it
document.addEventListener('dragenter', (e) => {
  // console.log('DRAG ENTER');
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
