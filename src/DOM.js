import { dynamicController } from './controller';

function initOffset(ships) {
  ships.forEach((ship) => {
    const child = ship.childNodes;
    console.log(child);
    if (child[0]) child[0].addEventListener('mouseenter', () => (ship.setAttribute('offset', 0)));
    if (child[1]) child[1].addEventListener('mouseenter', () => (ship.setAttribute('offset', -1)));
    if (child[2]) child[2].addEventListener('mouseenter', () => (ship.setAttribute('offset', -2)));
    if (child[3]) child[3].addEventListener('mouseenter', () => (ship.setAttribute('offset', -3)));
  });
}

// function checkPosition(ship, e) {
//   // the array which holds the addition grid elements
//   const elemArray = [];
//   const shipSize = checkSize(ship);
//   let offset = 0;
//   const child = ship.childNodes;
//   console.log(child);
//   if (child[0]) child[0].addEventListener('mouseenter', () => (offset = 0));
//   if (child[1]) child[1].addEventListener('mouseenter', () => (offset = -1));
//   if (child[2]) child[2].addEventListener('mouseenter', () => (offset = -2));
//   if (child[3]) child[3].addEventListener('mouseenter', () => (offset = -3));
//   console.log(offset);
// }

export default initOffset