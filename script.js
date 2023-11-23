createHeader()
createResetBtn()

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

function createResetBtn() {
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Create New Grid!';
    resetBtn.classList.add('reset-btn');
    resetBtn.onclick = resetGrid;
    document.body.appendChild(resetBtn);
}

function resetGrid() {
    const grid = document.querySelector('.grid');
    if (grid) {
        document.body.removeChild(grid);
    }
    createGrid();
}

function createGrid() {
    const grid = document.createElement('div');
    const header = document.querySelector('.header');
    const gridWrapper = document.createElement('div');
    const gridDimensions = getUserDimensions();
    gridWrapper.classList.add('grid-wrapper');
    grid.classList.add('grid');
    grid.appendChild(gridWrapper);

    for (let i = 0; i < gridDimensions * gridDimensions; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.style.cssText = `
            flex: 0 1 calc(100% / ${gridDimensions});
            border: 0.2px dashed var(--white);
            background-color: var(--grid-square-color-light);
        `;
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.classList.add('hatched');
        });
        gridWrapper.appendChild(gridSquare);
    }
    header.after(grid);
}