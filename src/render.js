/* eslint-disable no-loop-func */
import { displayController, dynamicController } from './controller';
import { createGridBlocks, createShip } from './dragndrop_render';

//

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
  createGridBlocks(cpuBoard, true);

  container.appendChild(title);
  container.appendChild(cpuBoard);

  const { bodyContainer } = displayController;

  bodyContainer.appendChild(container);
}

// hides the ships from the player
function hideShipsCPU(shipArray) {
  shipArray.forEach((ship) => {
    ship.childNodes.forEach((block) => {
      block.classList.add('hide');
    });
  });
}

// creates array of empty ships
function createShipsCPU() {
  const shipArray = [];
  shipArray.push(createShip(4, 'four', 1, false));
  for (let i = 0; i < 2; i++) {
    const ship = createShip(3, 'three', 2, false);
    shipArray.push(ship);
  }
  for (let i = 0; i < 3; i++) {
    const ship = createShip(2, 'two', 3, false);
    shipArray.push(ship);
  }
  for (let i = 0; i < 4; i++) {
    const ship = createShip(1, 'one', 4, false);
    shipArray.push(ship);
  }
  hideShipsCPU(shipArray);
  return shipArray;
}

// quick func to check if a ship placement passes the border
function passBorder(grid, shipSize, vertical) {
  let borderRight = false;
  let borderBottom = false;
  let tempGrid = grid;
  if (vertical) { // check if ship goes past bottom border
    for (let i = 0; i < shipSize; i++) {
      tempGrid = grid + (i * 10);
      if (borderBottom || tempGrid > 100) {
        return true;
      }
      if (tempGrid >= 91 && tempGrid <= 100) { borderBottom = true; }
    }
  } else { // check if ship goes past right border
    for (let i = 0; i < shipSize; i++) {
      console.log(i);
      tempGrid = grid + i;
      if (borderRight || tempGrid > 100) {
        return true;
      }
      if (tempGrid % 10 === 0) { borderRight = true; }
    }
  }
  return false;
}

function randomizeShipCPU() {
  const shipArray = createShipsCPU(); // creates ship Elements
  const boardGrids = dynamicController().cpuBoard.childNodes; // grabs CPU board grids
  let shipGrids = []; // keep track of ship Grids
  const blockedGrids = []; // keep track of blocked grids
  const attemptedGrids = []; // holds history of attempted ship drops

  // loop through each ship to find placement
  shipArray.forEach((ship) => {
    const shipSize = ship.getAttribute('size');
    let tempGrids = []; // holds test grids
    let check = false; // bool to break out of while loops

    // make sure that ship is placed in a valid grid
    while (!check) {
      let randomGrid = 0;
      let gridCheck = true;
      let vertical = false;

      // make sure that random grid hasnt already been attempted
      // init random grid
      while (gridCheck) {
        randomGrid = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        if (!attemptedGrids.includes(randomGrid)) {
          gridCheck = false;
          attemptedGrids.push(randomGrid);
          // add randomizer for orientation (vertical/horizontal)
          const verticalRandomizer = Math.floor((Math.random() * 2));
          if (verticalRandomizer === 1) {
            vertical = true;
            ship.classList.remove('horizontal');
            ship.classList.add('vertical');
          } else {
            vertical = false;
            ship.classList.add('horizontal');
            ship.classList.remove('vertical');
          }
        }
        if (attemptedGrids.length > 99) { // fail safe
          gridCheck = false;
          alert('exceeded grid attempts');
        }
      }

      tempGrids = []; // reset temp grid array
      let blockedGrid = 0; // init blocked Grid for later func

      // grab any additional grids
      for (let i = 0; i < shipSize; i++) {
        if (vertical === true) {
          tempGrids.push(randomGrid + (i * 10));
        } else {
          tempGrids.push(randomGrid + i);
        }
      }

      // checks to make sure that the selected Grid has no interferences
      if (!tempGrids.some((g) => g <= 0) // none of the grids below or = to 0
        && !tempGrids.some((g) => g > 100) // makes sure none of the temp grids is above 100
        && !tempGrids.some((g) => shipGrids.includes(g)) // make sure none of the grids already used
        && !tempGrids.some((g) => blockedGrids.includes(g)) // make sure none are in blocked zones
        && !passBorder(randomGrid, shipSize, vertical) // check it doesnt pass the board edge
      ) {
        check = true; // break out of while loop

        // created blocked Grids
        tempGrids.forEach((grid) => {
          const offsetModifiers = [-10, 0, 10];
          offsetModifiers.forEach((modifier) => {
            for (let i = -1; i < 2; i++) {
              // make sure that grids outside the border arent added.
              blockedGrid = grid + modifier;
              blockedGrid += i;
              if (!blockedGrids.includes(blockedGrid) && !shipGrids.includes(blockedGrid)
              && blockedGrid <= 100 && blockedGrid >= 1) { // dont add repeated blockedGrids
                blockedGrids.push(blockedGrid);
              }
            }
          });
        });
        // random grid verified APPEND SHIP TO CORRECT GRID
        console.log(`appended size ${shipSize} ship to Grid ${randomGrid}`);
        if (vertical) { console.log('vertical'); }
        console.log(tempGrids);
        ship.classList.add('dropped');
        ship.setAttribute('data-activegrids', JSON.stringify(tempGrids));
        boardGrids[randomGrid - 1].appendChild(ship);
      }
      // fail safe incase randomizer cannot find a grid layout
      if (attemptedGrids.length >= 99) {
        console.log('error, cpu board could not be built');
        console.log('Attempted Grids =');
        console.log(attemptedGrids);
        console.log('shipgrids =');
        console.log(shipGrids);
        console.log('blocked grids =');
        console.log(blockedGrids);
        check = true;
      }
    }
    shipGrids = shipGrids.concat(tempGrids); // add verified placed grids to ship grids array
  });

  console.log(shipGrids);
}

function mockShipRender() {
  const shipArray = createShipsCPU(); // creates ship Elements
  const boardGrids = dynamicController().cpuBoard.childNodes; // grabs CPU board grids
  let startingGrid = 12;
  for (let i = 0; i < 5; i++) {
    const ship = shipArray[i];
    ship.classList.add('dropped');
    boardGrids[startingGrid].appendChild(ship);
    startingGrid += 20;
  }
  const ship2 = shipArray[5];
  ship2.classList.remove('horizontal');
  ship2.classList.add('vertical');
  boardGrids[40].appendChild(ship2);
  startingGrid = 7;
  for (let i = 6; i < 10; i++) {
    const ship = shipArray[i];
    ship.classList.remove('horizontal');
    ship.classList.add('vertical');
    ship.classList.add('dropped');
    boardGrids[startingGrid].appendChild(ship);
    startingGrid += 20;
  }
}

export {
  renderCPUBoard, randomizeShipCPU, createShipsCPU, passBorder, mockShipRender,
};
