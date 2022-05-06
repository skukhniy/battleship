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

const gameboard = (player, board) => {
  const missedGrids = [];
  const boardExport = [];
  // convert player board
  if (player) {
    
  }
  // create ships
  const shipArray = [];
  // need to add history array and then sort
  const shipGrids = [];
  // recieveAttack Func
  const recieveAttack = (cordinates) => {
    // determine if the attack hit a ship
    if (shipGrids.includes(cordinates)) {
      shipArray.forEach((shipElem) => {
        // search for ship w/ active grid
        if (shipElem.activeGrids.contains(cordinates)) {
          shipElem.hit(cordinates); // will mark the current ship block as HIT
        }
      });
    } else {
      missedGrids.push(cordinates);
    }
  };
  // func to see if all ships have been sunk
  return {
    missedGrids, shipArray, shipGrids, recieveAttack,
  };
};

export { ship, gameboard };

// const player = (CPU) => {}

// const Player = (name,move,turn) =>{
//   const getPlayerName = ()=>{
//       return name
//   }
//   const getMoveType = ()=>{
//       return move
//   }
//   // this logic helps determine whose turn is it
//   let currentTurn = turn
//   const getTurn = ()=> {
//       return currentTurn
//   }
//   const nextTurn = ()=>{
//       if(currentTurn === true){
//           currentTurn = false
//       }else{
//           currentTurn = true
//       }
//   }
//   return{getPlayerName,getMoveType,getTurn,nextTurn}
// };
