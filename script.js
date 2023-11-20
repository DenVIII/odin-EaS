const gridDimensions = 16 * 16;

createGrid()



function createGrid() {
    const grid = document.createElement('div');
    grid.classList.add('grid');

    for (let i = 0; i < gridDimensions; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');

        grid.appendChild(gridSquare);
    }
    document.body.appendChild(grid);
}