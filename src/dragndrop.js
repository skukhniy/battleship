import { displayController, dynamicController } from './controller';
import createGridBlocks from './render';

createGridBlocks(displayController.boardContainer);

displayController.ship1block.addEventListener('dragstart', () => {
  console.log('drag start');
});

function clearDragAbove() {
  dynamicController()[0].forEach((block) => {
    block.classList.remove('dragAbove');
    block.setAttribute('draggable', false);
  });
}

dynamicController()[0].forEach((block) => {
  console.log('block');
  block.addEventListener('dragover', (e) => {
    e.preventDefault();
    clearDragAbove();
    block.classList.add('dragAbove');
    block.setAttribute('draggable', true);
  });
});

displayController.shipSelectContainer.addEventListener('dragover', (e) => {
  e.preventDefault();
  displayController.shipSelectContainer.appendChild(displayController.ship1block);
  clearDragAbove();
});

displayController.ship1block.addEventListener('dragend', () => {
  console.log('drag end');
  displayController.ship1block.remove();
});
