/* eslint-disable no-unused-vars */
import './style.css';
import './dragndrop';
import { renderShipSelection } from './dragndrop_render';
import './controller';
import { renderCPUBoard, randomizeShipCPU, mockShipRender } from './render';
import { gameboard } from './factories';
import { game } from './game';
import { playButton } from './DOM';

playButton();
// renderShipSelection();
// renderCPUBoard();
// randomizeShipCPU();
// mockShipRender();
// game();
