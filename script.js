const gridDimensions = getUserDimensions();
createHeader()
createGrid()

const gridSquares = document.querySelectorAll('.grid-square');
gridSquares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.classList.add('hatched');
    })
})

function getUserDimensions() {
    let result = +prompt('Please, enter number of squares per side (max: 100)');
    while (typeof result !== 'number' || result > 100 || isNaN(result)) {
        result = +prompt('Not a valid number. Please, enter number of squares per side (max: 100)');
    } 
    return result;
}

function createHeader() {
    const header = document.createElement('h1');
    header.textContent = 'Etch-a-Sketch!';
    header.classList.add('header');
    document.body.appendChild(header);
}

function createGrid() {
    const grid = document.createElement('div');
    const gridWrapper = document.createElement('div');
    gridWrapper.classList.add('grid-wrapper');
    grid.classList.add('grid');
    grid.appendChild(gridWrapper);

    for (let i = 0; i < gridDimensions * gridDimensions; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');

        gridWrapper.appendChild(gridSquare);
    }
    document.body.appendChild(grid);
}