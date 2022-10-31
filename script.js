/* Modes */
const COLOR = "color";
const RAINBOW = "rainbow";
const ERASER = "eraser";

/* Initial values */
const INITIAL_GRID_DIMENSION = 16;
const INITIAL_COLOR_VALUE = "#333";
const INITIAL_MODE = COLOR;
const GRID_SQUARES_PARENT_SIZE = 500;
const SQUARE_INITIAL_COLOR = "#fefefe";

/* DOM Elements References */
const colorPicker = document.querySelector(`#colorPicker`);
const colorBtn = document.querySelector(`#colorBtn`);
const rainbowBtn = document.querySelector(`#rainbowBtn`);
const eraserBtn = document.querySelector(`#eraserBtn`);
const clearBtn = document.querySelector(`#clearBtn`);
const sizeValueDiv = document.querySelector(`#sizeValue`);
const sizeSlider = document.querySelector(`#sizeSlider`);
const gridSquaresParent = document.querySelector(`.grid`);

let currentMode = COLOR;

/* Functions */
function createGridSquares(gridDimension) {
    const squareDimension = GRID_SQUARES_PARENT_SIZE / gridDimension;
    console.log(squareDimension);

    for (let i = 0; i < gridDimension; i++) {
        for (let j = 0; j < gridDimension; j++) {
            const square = document.createElement('div');
            square.style.cssText = `width: ${squareDimension}px; height: ${squareDimension}px; border: 3px solid black`;
            gridSquaresParent.appendChild(square);
        }
    }
}

/* Event Listeners */
window.addEventListener('load', e => {
    colorBtn.classList.add('active');
    createGridSquares(INITIAL_GRID_DIMENSION);
});

colorBtn.addEventListener('click', e => {
    if (currentMode === COLOR)
        return;
    else if (currentMode === RAINBOW)
        rainbowBtn.classList.remove('active');
    else
        eraserBtn.classList.remove('active');

    colorBtn.classList.add('active');
    currentMode = COLOR;
});

rainbowBtn.addEventListener('click', e => {
    if (currentMode === rainbowBtn)
        return;
    else if (currentMode === COLOR)
        colorBtn.classList.remove('active');
    else
        eraserBtn.classList.remove('active');

    rainbowBtn.classList.add('active');
    currentMode = RAINBOW;
});

eraserBtn.addEventListener('click', e => {
    if (currentMode === ERASER)
        return;
    else if (currentMode === RAINBOW)
        rainbowBtn.classList.remove('active');
    else
        colorBtn.classList.remove('active');

    eraserBtn.classList.add('active');
    currentMode = ERASER;
});

clearBtn.addEventListener('click', e => {
    const gridSquares = gridSquaresParent.querySelectorAll('div');
    gridSquares.forEach(square => square.style.backgroundColor = SQUARE_INITIAL_COLOR);
});

sizeSlider.addEventListener('change', e => {
    sizeValueDiv.textContent = `${sizeSlider.value} x ${sizeSlider.value}`;

    gridSquaresParent.innerHTML = '';
    createGridSquares(sizeSlider.value);
});