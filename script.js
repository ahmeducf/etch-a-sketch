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
let mouseDown = false;

/* Functions */
function createGridSquares(gridDimension) {
    const squareDimension = GRID_SQUARES_PARENT_SIZE / gridDimension;

    for (let i = 0; i < gridDimension; i++) {
        for (let j = 0; j < gridDimension; j++) {
            const square = document.createElement('div');
            
            square.addEventListener('mouseover', changeSquareColor);
            square.addEventListener('mousedown', changeSquareColor);
            
            square.style.cssText = `width: ${squareDimension}px; height: ${squareDimension}px;`;
            
            gridSquaresParent.appendChild(square);
        }
    }
}

function changeSquareColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return;

    if (currentMode === RAINBOW) {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);

        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if (currentMode === COLOR) {
        e.target.style.backgroundColor = colorPicker.value;
    } else if (currentMode === ERASER) {
        e.target.style.backgroundColor = SQUARE_INITIAL_COLOR;
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

window.addEventListener('mousedown', () => mouseDown = true);
window.addEventListener('mouseup', () => mouseDown = false);