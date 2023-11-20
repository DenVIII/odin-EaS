const gridDimensions = 16 * 16;

createGrid()



function createGrid() {
    const grid = document.createElement('div');
    const gridWrapper = document.createElement('div');
    gridWrapper.classList.add('grid-wrapper');
    grid.classList.add('grid');
    grid.appendChild(gridWrapper);

    for (let i = 0; i < gridDimensions; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');

        gridWrapper.appendChild(gridSquare);
    }
    document.body.appendChild(grid);
}