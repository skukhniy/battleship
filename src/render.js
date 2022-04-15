function createGridBlocks(container) {
  for (let i = 1; i < 101; i++) {
    const blockDiv = document.createElement('div');
    blockDiv.className = 'grid_block';
    blockDiv.id = `grid${String(i)}`;
    container.appendChild(blockDiv);
  }
}

export default createGridBlocks;
