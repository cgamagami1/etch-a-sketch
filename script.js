const colorInput = document.getElementById("color");
const paintButton = document.getElementById("paint");
const rainbowPaintButton = document.getElementById("rainbow-paint");
const eraserButton = document.getElementById("eraser");
const clearButton = document.getElementById("clear");
const canvas = document.getElementById("canvas");
const sizeSlider = document.getElementById("size");
const sizeLabel = document.getElementById("size-label");
const pixels = [];
let selectedButton;

paintButton.addEventListener("click", () => { buttonSelect(paintButton); });
rainbowPaintButton.addEventListener("click", () => { buttonSelect(rainbowPaintButton); });
eraserButton.addEventListener("click", () => { buttonSelect(eraserButton); });
clearButton.addEventListener("click", clear);
sizeSlider.addEventListener("input", setSize);
canvas.addEventListener("mousedown", paintPixel);
canvas.addEventListener("mouseover", paintPixel);

buttonSelect(paintButton);
setSize();

function setSize() {
    //remove pixels and empty pixel array
    for (pixel of pixels) {
        pixel.remove();
    }

    while(pixels.length > 0) {
        pixels.pop();
    }

    //generate new pixel grid 
    for (let i = 0; i < size.value ** 2; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        canvas.appendChild(pixel);
        pixels.push(pixel);
        pixel.style.height = "calc(600px / " + size.value + ")";
        pixel.style.width = "calc(600px / " + size.value + ")";
    }
    
    sizeLabel.textContent = "Canvas Size: " + size.value + " x " + size.value;
}

function buttonSelect(selection) {
    selectedButton = selection;

    for (const btn of [paintButton, rainbowPaintButton, eraserButton]) {
        btn.classList.remove("selected");
    }

    selectedButton.classList.add("selected");
}

function paintPixel(e) {
    if(e.buttons === 1){
        e.preventDefault(); // preventDefault() stops user from grabbing the element. Can also use "user-select: none;" in CSS
        switch (selectedButton.id) {
            case "paint":
                e.target.style.backgroundColor = colorInput.value;
                break;
            case "rainbow-paint":
                e.target.style.backgroundColor = randomColorHex();
                break;
            case "eraser":
                e.target.style.backgroundColor = "white";
                break;
        }
    }
    
}

function clear() {
    for (pixel of pixels) {
        pixel.style.backgroundColor = "white";
    }
}

function randomColorHex() {
    return "#" + randomByte() + randomByte() + randomByte();
}

function randomByte() {
    return Math.floor(Math.random() * 256).toString(16);
}