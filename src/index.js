import './style.css';
import displayController from './controller';

displayController.ship1block.addEventListener('dragstart', () => {
  console.log('drag start');
});

displayController.gridBlocks.forEach((block) => {
  block.addEventListener('dragover', () => {
    console.log('drag over');
  });
});

displayController.ship1block.addEventListener('dragend', () => {
  console.log('drag end');
});
