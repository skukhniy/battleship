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
  };
  return {
    activeGrids, size, hit, isSunk, hitGrids,
  };
};

export default ship;
// const gameboard = () => {}

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
