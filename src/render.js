/* eslint-disable no-loop-func */
import { displayController, dynamicController } from './controller';
import { createGridBlocks, createShip } from './dragndrop_render';

// create CPU game board
function renderCPUBoard() {
  const container = document.createElement('div');
  container.id = 'cpu_board_container';
  container.classList.add('board_container');

  const title = document.createElement('div');
  title.classList.add('player_title');
  const text = document.createElement('h1');
  text.innerHTML = 'CPU';
  title.appendChild(text);

  const cpuBoard = document.createElement('div');
  cpuBoard.id = 'cpu_board';
  cpuBoard.classList.add('board');
  createGridBlocks(cpuBoard);

  container.appendChild(title);
  container.appendChild(cpuBoard);

  const { bodyContainer } = displayController;

  bodyContainer.appendChild(container);
}

// creates array of empty ships
function createShipsCPU() {
  const shipArray = [];
  for (let i = 0; i < 4; i++) {
    const ship = createShip(1, 'one', 4, false);
    shipArray.push(ship);
  }
  for (let i = 0; i < 3; i++) {
    const ship = createShip(2, 'two', 3, false);
    shipArray.push(ship);
  }
  for (let i = 0; i < 2; i++) {
    const ship = createShip(3, 'three', 2, false);
    shipArray.push(ship);
  }
  const ship = createShip(4, 'four', 1, false);
  shipArray.push(ship);
  return shipArray;
}

function randomizeShipCPU() {
  const shipArray = createShipsCPU();
  const boardGrids = dynamicController().cpuBoard.childNodes;
  let shipGrids = [];
  const blockedGrids = [];
  const attemptedGrids = []; // holds history of attempted ship drops
  shipArray.forEach((ship) => {
    const shipSize = ship.getAttribute('size');
    let tempGrids = [];
    let check = false;

    while (!check) {
      const randomGrid = Math.floor(Math.random() * (100 - 1 + 1) + 1);
      attemptedGrids.push(randomGrid);
      tempGrids = []; // reset temp grid array
      // grab any additional grids
      for (let i = 0; i < shipSize; i++) {
        tempGrids.push(randomGrid + i);
      }
      // checks to make sure that the selected Grid has no interferences
      if (!tempGrids.some((g) => g <= 0)
        && !tempGrids.some((g) => g > 100)
        && !tempGrids.some((g) => shipGrids.includes(g))
        && !tempGrids.some((g) => blockedGrids.includes(g))) {
        check = true; // break out of while loop
        if (((elemID % 10) - 1) === 0) { borderLeft = true; } // check if ship is placed on the border
        if (elemID % 10 === 0) { borderRight = true; }
        // created blocked Grids
        tempGrids.forEach((grid) => {
          const offsetModifiers = [-10, 0, 10];
          offsetModifiers.forEach((modifier) => {
            for (let i = -1; i < 2; i++) {
              // make sure that grids outside the border arent added.
              if (!(((i === 1) && (borderRight)) || ((i === -1) && (borderLeft)))){
                let blockedGrid = grid + modifier;
                blockedGrid += i;
              }
              if (!blockedGrids.includes(blockedGrid) && !shipGrids.includes(blockedGrid)
              && blockedGrid <= 100 && blockedGrid >= 1) {
                blockedGrids.push(blockedGrid);
              }
            }
          });
        });

        boardGrids[randomGrid + 1].appendChild(ship); // append ship to correct grid
      }
      // fail safe incase randomizer cannot find a grid layout
      if (attemptedGrids.length >= 99) {
        console.log('error, cpu board could not be built');
        window.stop();
      }
    }
    shipGrids = shipGrids.concat(tempGrids);
  });

  console.log(shipGrids);
}

export { renderCPUBoard, randomizeShipCPU, createShipsCPU };
