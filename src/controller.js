const displayController = (() => {
  const bodyContainer = document.getElementById('body_container');
  const board = document.getElementById('board');
  const boardContainer = document.getElementById('board_container');
  const shipSelectContainer = document.getElementById('ship_select_container');
  return {
    board, shipSelectContainer, boardContainer, bodyContainer,
  };
})();

function dynamicController() {
  return ({
    gridBlocks: document.querySelectorAll('.grid_block'),
    ships: document.querySelectorAll('[draggable="true"]'),
    blockedZones: document.querySelectorAll('.blockedzone'),
    reset: document.getElementById('resetBtn'),
    undo: document.getElementById('undoBtn'),
    boardBtnContainer: document.getElementById('board_btn_container'),
    cpuBoard: document.getElementById('cpu_board'),
  });
}

export { displayController, dynamicController };
