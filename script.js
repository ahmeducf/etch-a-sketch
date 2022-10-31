/* Modes */
const COLOR = "color";
const RAINBOW = "rainbow";
const ERASER = "eraser";

/* Initial values */
const INITIAL_GRID_DIMENSION = 16;
const INITIAL_COLOR_VALUE = "#333";
const INITIAL_MODE = COLOR;
const GRID_SQUARES_PARENT_SIZE = 500;

/* DOM Elements References */
const colorPicker = document.querySelector(`#colorPicker`);
const colorBtn = document.querySelector(`#colorBtn`);
const rainbowBtn = document.querySelector(`#rainbowBtn`);
const eraserBtn = document.querySelector(`#eraserBtn`);
const clearBtn = document.querySelector(`#clearBtn`);
const sizeSlider = document.querySelector(`#sizeSlider`);
const gridSquaresParent = document.querySelector(`.grid`);

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
})

