/** @jest-environment jsdom */
/* eslint-disable */ 
import {ship, gameboard, player} from "../factories";

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
let ship2 = mockShip();
const ships = [ship2]
const playerGameboard = gameboard(true, ships);



it('checking if cordinates will hit a ship', () => {
  playerGameboard.recieveAttack(12);
  expect(playerGameboard.shipGrids.includes(12)).toBeTruthy();
})

it('check if correct ship was found and hit', () => {
  expect(playerGameboard.shipArray[0].hitGrids.includes(12)).toBeTruthy();
})

it ('check if ship will hold multiple hit cordinates', () => {
  playerGameboard.recieveAttack(13);
  expect(playerGameboard.shipArray[0].hitGrids).toEqual([12,13]);
})

it('check if missed attack will go to the missed Grid', () => {
  playerGameboard.recieveAttack(22);
  expect(playerGameboard.missedGrids).toEqual([22]);
})

it('check if sunk func works', () => {
  expect(playerGameboard.isSunk()).toBeFalsy();
})

it('check if sunk func works with sunken ships', () => {
  playerGameboard.recieveAttack(11);
  expect(playerGameboard.isSunk()).toBeTruthy();
})

const testPlayer = player();

it('check if turn change works for player func', () => {
  testPlayer.changeTurn();
  expect(testPlayer.currentTurn).toBeTruthy
})

it('check if CPU Attack returns an int', () => {
  expect(testPlayer.cpuAttack(playerGameboard)).toEqual(expect.any(Number));
})
