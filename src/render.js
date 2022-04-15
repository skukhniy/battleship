function createGridBlocks(container) {
  for (let i = 1; i < 101; i++) {
    const blockDiv = document.createElement('div');
    blockDiv.classList.add('grid_block', 'dropzone');
    blockDiv.id = `grid${String(i)}`;
    // const openDiv = document.createElement('div');
    // openDiv.className = 'open_block';
    // blockDiv.appendChild(openDiv);
    container.appendChild(blockDiv);
  }
}

export default createGridBlocks;
