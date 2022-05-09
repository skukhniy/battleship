/* eslint-disable no-unused-vars */
import './style.css';
import './dragndrop';
import { renderShipSelection } from './dragndrop_render';
import './controller';
import { renderCPUBoard, randomizeShipCPU } from './render';

// renderShipSelection();
renderCPUBoard();
randomizeShipCPU();