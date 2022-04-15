import { displayController, dynamicController } from './controller';
import createGridBlocks from './render';

createGridBlocks(displayController.boardContainer);

let dragged;

document.addEventListener('drag', () => {

});

document.addEventListener('dragstart', (e) => {
  dragged = e.target;
  console.log(dragged);
});

document.addEventListener('dragenter', (e) => {
  console.log('DRAG ENTER');
  if (e.target.classList.contains('dropzone')) {
    e.target.style.background = 'red';
  }
});
document.addEventListener('dragover', (e) => {
  e.preventDefault();
});

document.addEventListener('dragleave', (e) => {
  console.log('DRAG LEAVE');
  if (e.target.classList.contains('dropzone')) {
    e.target.style.background = 'none';
  }
});

document.addEventListener('drop', (e) => {
  console.log('DROP');
  e.preventDefault();
  console.log('test');
  if (e.target.classList.contains('dropzone')) {
    console.log(dragged);
    dragged.parentNode.removeChild(dragged);
    dragged.style.border = 'none';
    console.log(dragged.childNodes);
    dragged.childNodes[1].style.border = 'none';
    dragged.childNodes[3].style.border = 'none';
    e.target.appendChild(dragged);
    e.target.style.background = 'none';
  }
});
