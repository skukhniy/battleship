import { displayController} from './controller';
import createGridBlocks from './render';

createGridBlocks(displayController.boardContainer);

let dragged;
let position;
let activeGrids;

function grabGridID(e) {
  let gridID = e.id.replace(/[^0-9]/g, '');
  gridID = parseInt(gridID, 10);
  return (gridID);
}
function checkPosition(block, e) {
  if (block.offsetHeight === 100 || block.offsetWidth === 100) {
    let secondGridID = 0;
    if (block.offsetHeight === 100) {
      secondGridID = grabGridID(e) + 10;
      const secondGrid = document.getElementById(`grid${String(secondGridID)}`);
      return secondGrid;
    }
  }
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
  if (e.target.classList.contains('dropzone')) {
    e.target.style.background = 'red';
    const secondGrid = checkPosition(dragged, e.target);
    secondGrid.style.background = 'red';
    activeGrids = [e.target.id, secondGrid.id];
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
    const secondGrid = checkPosition(dragged, e.target);
    if (!activeGrids.includes(secondGrid.id)) {
      secondGrid.style.background = 'none';
    }
  }
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

// function grabGridID(e) {
//   let gridID = e.id.replace(/[^0-9]/g, '');
//   gridID = parseInt(gridID, 10);
//   return (gridID);
// }

// function checkPosition(block, e) {
//   console.log(block.offsetHeight);
//   console.log(block.offsetWidth);
//   if (block.offsetHeight === 100 || block.offsetWidth === 100) {
//     console.log('check 1');
//     console.log(e);
//     let secondGridID = 0;
//     if (block.offsetHeight === 100) {
//       console.log('check 2');
//       secondGridID = grabGridID(e) + 10;
//       const secondGrid = document.getElementById(`grid${String(secondGridID)}`);
//       console.log(block.childNodes[3]);
//       secondGrid.appendChild(block.childNodes[3]);
//       e.appendChild(block.childNodes[1]);
//     }
//   }
// }
