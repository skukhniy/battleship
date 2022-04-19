const displayController = (() => {
  const boardContainer = document.getElementById('board_container');
  const shipSelectContainer = document.getElementById('ship_select_container');
  const ship1block = document.getElementById('1-1');
  const ship2block = document.getElementById('2-1');
  const ship3block = document.getElementById('3-1');
  const ship4block = document.getElementById('4-1');
  return {
    boardContainer, shipSelectContainer, ship1block, ship2block, ship3block, ship4block,
  };
})();

function dynamicController() {
  const gridBlocks = document.querySelectorAll('.grid_block');
  return ([gridBlocks]);
}

export { displayController, dynamicController };
