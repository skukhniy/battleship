const displayController = (() => {
  const board = document.getElementById('board');
  const shipSelectContainer = document.getElementById('ship_select_container');
  return {
    board, shipSelectContainer,
  };
})();

function dynamicController() {
  const gridBlocks = document.querySelectorAll('.grid_block');
  const ships = document.querySelectorAll('[draggable="true"]');
  const blockedZones = document.querySelectorAll('.blockedzone');
  const reset = document.getElementById('resetBtn');
  const undo = document.getElementById('undoBtn');
  return ([gridBlocks, ships, blockedZones, reset, undo]);
}

export { displayController, dynamicController };
