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

function createShipSelection(container) {
  const ship1block = document.createElement('div');
  ship1block.classList.add('ship_1_block');
  // 1 block ships
  for (let i = 1; i < 5; i++) {
    const ship1 = document.createElement('div');
    ship1.id = `1-${String(i)}`;
    ship1.classList = 'ship_1_block';
    ship1.setAttribute('draggable', true);
    container.appendChild(ship1);
  }
  for (let i = 1; i < 4; i++) {
    const ship2 = document.createElement('div');
    ship2.id = `2-${String(i)}`;
    ship2.classList = 'ship_2_block';
    ship2.setAttribute('draggable', true);
    for (let i = 1; i < 3; i++) {
      const ship1blockclone1 = ship1block.cloneNode(true);
      ship2.appendChild(ship1blockclone1);
    }
    container.appendChild(ship2);
  }
  for (let i = 1; i < 3; i++) {
    const ship3 = document.createElement('div');
    ship3.id = `3-${String(i)}`;
    ship3.classList = 'ship_3_block';
    ship3.setAttribute('draggable', true);
    for (let i = 1; i < 4; i++) {
      const ship1blockclone1 = ship1block.cloneNode(true);
      ship3.appendChild(ship1blockclone1);
    }

    container.appendChild(ship3);
  }
  const ship4 = document.createElement('div');
  ship4.id = '4-1';
  ship4.classList = 'ship_4_block';
  ship4.setAttribute('draggable', true);
  for (let i = 1; i < 5; i++) {
    const ship1blockclone1 = ship1block.cloneNode(true);
    ship4.appendChild(ship1blockclone1);
  }
  container.appendChild(ship4);
}

export { createGridBlocks, createShipSelection };
