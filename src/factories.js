const ship = (shipObj) => {
  const activeGrids = JSON.parse(shipObj.getAttribute('data-activeGrids'));
  const hitGrids = [];
  const size = JSON.parse(shipObj.getAttribute('size'));
  // function to mark parts of the ship as 'hit'
  const hit = (gridID) => {
    hitGrids.push(gridID);
    // decide if I want to add an alert/text //
  };
  // func to confirm if the ship is Sunk
  const isSunk = () => {
    if (hitGrids.length === size) {
      return true;
    }
    return false;
  };
  return {
    activeGrids, size, hit, isSunk, hitGrids,
  };
};

// gameboard factory.
const gameboard = (player, board) => {
  // create ships
  const shipArray = [];
  // holds all the missed attacks
  const missedGrids = [];
  // marks all grids that have been hit
  const attackedGrids = [];
  // need to add history array and then sort
  const shipGrids = [];

  // convert player board
  if (player) {
    board.forEach((shipObj) => {
      const shipElem = ship(shipObj);
      shipElem.activeGrids.forEach((grid) => { shipGrids.push(grid); });
      shipArray.push(shipElem);
    });
  }

  // recieveAttack Func
  const recieveAttack = (cordinates) => {
    // determine if the attack hit a ship
    if (shipGrids.includes(cordinates)) {
      shipArray.forEach((shipElem) => {
        // search for ship w/ active grid
        if (shipElem.activeGrids.includes(cordinates)) {
          shipElem.hit(cordinates); // will mark the current ship block as HIT
          attackedGrids.push(cordinates);
        }
      });
    } else {
      missedGrids.push(cordinates);
      attackedGrids.push(cordinates);
    }
  };
  // func to see if all ships have been sunk
  const isSunk = (() => {
    let bool = true;
    shipArray.forEach((shipElem) => {
      if (!shipElem.isSunk()) {
        bool = false;
      }
    });
    return bool;
  });
  return {
    missedGrids, shipArray, shipGrids, recieveAttack, isSunk, attackedGrids,
  };
};

// player factory, tracks turn change and allows CPU to generate Attack
const player = () => {
  let currentTurn = false;
  const changeTurn = (bool) => {
    currentTurn = bool;
  };
  const cpuAttack = (board) => {
    function randomInt() { return (Math.random() * (100 - 1) + 1); }
    let attackCordinates = randomInt();
    while (board.attackedGrids.includes(attackCordinates)) {
      attackCordinates = randomInt();
    }
    return attackCordinates;
  };
  return {
    changeTurn, cpuAttack, currentTurn,
  };
};

export { ship, gameboard, player };

