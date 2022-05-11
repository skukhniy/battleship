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
  board.forEach((shipObj) => {
    const shipElem = ship(shipObj);
    shipElem.activeGrids.forEach((grid) => { shipGrids.push(grid); });
    shipArray.push(shipElem);
  });

  // recieveAttack Func
  const recieveAttack = (cordinates) => {
    let id = '';
    if (player) {
      id = `grid${cordinates}`;
    } else {
      id = `gridCpu${cordinates}`;
    }
    const gridElem = document.getElementById(id);
    console.log(shipGrids);
    // determine if the attack hit a ship
    if (shipGrids.includes(cordinates)) {
      shipArray.forEach((shipElem) => {
        // search for ship w/ active grid
        if (shipElem.activeGrids.includes(cordinates)) {
          shipElem.hit(cordinates); // will mark the current ship block as HIT
          attackedGrids.push(cordinates);
          gridElem.innerHTML += "<div class='hit'>&#x2713</div>";
        }
      });
    } else {
      missedGrids.push(cordinates);
      attackedGrids.push(cordinates);
      gridElem.innerHTML += "<div class='missed'>&#10060</div>";
      // gridElem.classList.add('missed');
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
const player = (cpu) => {
  let currentTurn = true;
  if (cpu) { currentTurn = false; }
  const changeTurn = () => {
    if (currentTurn) { currentTurn = false; } else currentTurn = true;
  };
  const cpuAttack = (board) => {
    function randomInt() { return Math.floor(Math.random() * (100 - 1) + 1); }
    let attackCordinates = randomInt();
    while (board.attackedGrids.includes(attackCordinates)) {
      attackCordinates = randomInt();
    }
    console.log(attackCordinates);
    return attackCordinates;
  };
  const getTurn = () => currentTurn;
  return {
    changeTurn, cpuAttack, currentTurn, getTurn,
  };
};

export { ship, gameboard, player };
