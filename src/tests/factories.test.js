/** @jest-environment jsdom */
/* eslint-disable */ 
import {ship, gameboard} from "../factories";

// create ships
function mockShip(){
  const mockShip = document.createElement('div');
  mockShip.classList.add('ship_3_block', 'horizontal');
  mockShip.setAttribute('draggable', true);
  mockShip.setAttribute('ship', true);
  mockShip.setAttribute('size', JSON.stringify(3));
  mockShip.setAttribute('data-activeGrids', JSON.stringify([11, 12, 13]));
  return mockShip
}
let ship1 = ship(mockShip());

it('checkSize', () => {
  expect(ship1.size).toEqual(3);
});

it('check Grids' , () => {
  expect(
    ship1.activeGrids
      ).toStrictEqual([11, 12, 13])
});

it('check hit func', () => {
  ship1.hit(11)
  expect(ship1.hitGrids).toContain(11);
});

it('check hitgrid length', () => {
  ship1.hit(12);
  ship1.hit(13);
  expect(ship1.hitGrids.length).toEqual(3);
})

it('check sink func', () => {
  expect(ship1.isSunk()).toBeTruthy();
})

// new ship for gameboard factory tests
let ship2 = ship(mockShip());

// create gameboard
function mockGameboard(){

}
const playerGameboard = gameboard();
playerGameboard.shipArray = [ship2];
playerGameboard.shipGrids = [ship2.activeGrids];



it('checking if cordinates will hit a ship', () => {
  playerGameboard.recieveAttack(12);
  expect(playerGameboard.shipGrids.includes(12)).toBeTruthy();
})

it('check if correct ship was found and hit', () => {
  expect(ship2.hitGrids.includes(13)).toBeTruthy();
})

it ('check if ship will hold multiple hit cordinates', () => {
  playerGameboard.recieveAttack(13);
  expect(ship2.hitGrids).toEqual([12,13]);
})