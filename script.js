createHeader();
createBtnContainer();
createResetBtn();
createRainbowModeBtn();

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

function createBtnContainer() {
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);
}

function createResetBtn() {
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Create New Grid!';
    resetBtn.classList.add('btn');
    resetBtn.onclick = resetGrid;
    document.querySelector('.container').appendChild(resetBtn);
}

function resetGrid() {
    const grid = document.querySelector('.grid');
    if (grid) {
        document.body.removeChild(grid);
    }
    createGrid();
}

function createRainbowModeBtn() {
    const rainbowBtn = document.createElement('button');
    rainbowBtn.textContent = 'Toggle Rainbow Mode';
    rainbowBtn.classList.add('btn');
    rainbowBtn.onclick = rainbowMode;
    document.querySelector('.container').appendChild(rainbowBtn);
}

function rainbowMode() {
    const gridSquares = document.querySelectorAll('.grid-square');
    if (gridSquares) {
        this.classList.toggle('active');
        if (this.classList.contains('active')) {
            gridSquares.forEach((square) => {
                square.removeEventListener('mouseover', addHatchedCSS);
                square.addEventListener('mouseover', randomColorBackground);
            })
        } else {
            gridSquares.forEach((square) => {
                square.removeEventListener('mouseover', randomColorBackground);
                square.addEventListener('mouseover', addHatchedCSS);
            })
        }
    }
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
        gridSquare.addEventListener('mouseover', addHatchedCSS);
        gridWrapper.appendChild(gridSquare);
    }
    header.after(grid);
}

function addHatchedCSS() {
    this.style.background = `var(--hatching)`;
}

function randomColorBackground() {
    this.style.background = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}