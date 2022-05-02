/** @jest-environment jsdom */
/* eslint-disable */ 
import ship from "../factories";

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
const ship1 = ship(mockShip());



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