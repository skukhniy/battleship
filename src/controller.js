const displayController = (() => {
  const bodyContainer = document.getElementById('body');
  const board = document.getElementById('board');
  const boardContainer = document.getElementById('board_container');
  const shipSelectContainer = document.getElementById('ship_select_container');
  const boardBtnContainer = document.getElementById('board_btn_container');
  return {
    board, shipSelectContainer, boardBtnContainer, boardContainer, bodyContainer,
  };
})();

function dynamicController() {
  return ({
    gridBlocks: document.querySelectorAll('.grid_block'),
    ships: document.querySelectorAll('[draggable="true"]'),
    blockedZones: document.querySelectorAll('.blockedzone'),
    reset: document.getElementById('resetBtn'),
    undo: document.getElementById('undoBtn'),
  });
}

export { displayController, dynamicController };
