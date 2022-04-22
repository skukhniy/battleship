import { dynamicController } from './controller';

function initOffset(ships) {
  ships.forEach((ship) => {
    const child = ship.childNodes;
    if (child[0]) child[0].addEventListener('mouseenter', () => (ship.setAttribute('offset', 0)));
    if (child[1]) child[1].addEventListener('mouseenter', () => (ship.setAttribute('offset', -1)));
    if (child[2]) child[2].addEventListener('mouseenter', () => (ship.setAttribute('offset', -2)));
    if (child[3]) child[3].addEventListener('mouseenter', () => (ship.setAttribute('offset', -3)));
  });
}

export default initOffset;