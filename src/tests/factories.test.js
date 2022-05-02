/** @jest-environment jsdom */
/* eslint-disable */ 
import ship from "../factories";

// create ships
function mockShip(){
  const mockShip = document.createElement('div');
  mockShip.classList.add('ship_3_block', 'horizontal');
  mockShip.setAttribute('draggable', true);
  mockShip.setAttribute('ship', true);
  mockShip.setAttribute('size', 3);
  mockShip.setAttribute('data-activeGrids', JSON.stringify([11, 12, 13]));
  return mockShip
}
const ship1 = ship(mockShip());



it('checkSize', () => {
  expect(ship1.size === 3).toBe(true);
});
