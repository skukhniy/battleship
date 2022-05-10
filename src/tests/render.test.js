/** @jest-environment jsdom */
/* eslint-disable */ 
import { createShip } from "../dragndrop_render";
import { randomizeShipCPU, createShipsCPU, passBorder } from "../render";

it('check if ship Array comes through', () => {
  expect(createShipsCPU()).not.toBeNull()
})

it('check if random grid will fail from a temp grid over 100', () => {
      const tempGrids = [100, 101, 102];
      expect(!tempGrids.some((g) => g <= 0)
        && !tempGrids.some((g) => g > 100)).toBeFalsy();
})
it('check if random grid will pass from a temp grid under 100', () => {
  const tempGrids = [98, 99, 100];
  expect(!tempGrids.some((g) => g <= 0)
    && !tempGrids.some((g) => g > 100)).toBeTruthy();
})
it('check for failure if shipGrid array has the same grids', () => {
  const shipGrids = [1, 2, 3, 98]
  const tempGrids = [98, 99, 100];
  expect(!tempGrids.some((g) => g <= 0)
    && !tempGrids.some((g) => g > 100)
    && !shipGrids.some((g) => tempGrids.includes(g))).toBeFalsy();
})
it('check while loop to see if it will break', () => {
  let randomGrid = 100;
  const shipSize = 3;
  let check = false;
  while(!check){
    const tempGrids = [];
    // grab all active grids if ship is placed at grandom Grid
    for (let i = 0; i < shipSize; i++) {
      tempGrids.push(randomGrid + i);
    }
    if (!tempGrids.some((g) => g <= 0)
      && !tempGrids.some((g) => g > 100)) {
      check = true;
    } else {
      randomGrid = randomGrid-1;
    }
  }
  expect(check).toBeTruthy();
})

it('testing a ship that passes thru the board', () => {
  expect(passBorder(18, 4, false)).toBeTruthy();
})
it('testing for a ship that stays in bounds', () => {
  expect(passBorder(47,3)).toBeFalsy();
})