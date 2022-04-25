import { dynamicController } from './controller';

function initOffset(ships) {
  ships.forEach((ship) => {
    const child = ship.children;
    if (child[0]) child[0].addEventListener('mouseenter', () => (ship.setAttribute('offset', 0)));
    if (child[1]) child[1].addEventListener('mouseenter', () => (ship.setAttribute('offset', -1)));
    if (child[2]) child[2].addEventListener('mouseenter', () => (ship.setAttribute('offset', -2)));
    if (child[3]) child[3].addEventListener('mouseenter', () => (ship.setAttribute('offset', -3)));
  });
}

function flipShip() {
  const ships = dynamicController()[1];
  ships.forEach((ship) => {
    ship.addEventListener('click', () => {
      if (!ship.classList.contains('dropped')) {
        if (ship.classList.contains('horizontal')) {
          ship.classList.remove('horizontal');
          ship.classList.add('vertical');
        } else {
          ship.classList.remove('vertical');
          ship.classList.add('horizontal');
        }
      }
    });
  });
}
export { initOffset, flipShip };
