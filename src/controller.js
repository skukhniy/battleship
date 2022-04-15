const displayController = (() => {
  const boardContainer = document.getElementById('board_container');
  const shipSelectContainer = document.getElementById('ship_select_container');
  const gridBlocks = document.querySelectorAll('.grid_block');
  const ship1block = document.getElementById('1-1');
  return {
    boardContainer, shipSelectContainer, gridBlocks, ship1block,
  };
})();

export default displayController;
