import './style.css';
import { displayController } from './controller';
import './dragndrop';
import { createBoardBtns, createGridBlocks, createShipSelection } from './dragndrop_render';

createBoardBtns();
createGridBlocks(displayController.board);
createShipSelection([0, 4, 3, 2, 1]);
