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

buttonSelect(paintButton);
setSize();

function setSize() {
    for (pixel of pixels) {
        pixel.remove();
    }

    while(pixels.length > 0) {
        pixels.pop();
    }

    for (let i = 0; i < size.value ** 2; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.addEventListener("mousedown", (e) => { selectPixel(e, pixel); });
        pixel.addEventListener("mouseover", (e) => { selectPixel(e, pixel); });
        canvas.appendChild(pixel);
        pixels.push(pixel);
        pixel.style.height = "calc(600px / " + size.value + ")";
        pixel.style.width = "calc(600px / " + size.value + ")";
    }
    
    sizeLabel.innerHTML = "Canvas Size: " + size.value + " x " + size.value;
}

function selectPixel(e, pixel) {
    if(e.buttons == 1){
        paintPixel(pixel);
        e.preventDefault();
    }
}

function buttonSelect(selection) {
    selectedButton = selection;
    paintButton.classList.remove("selected");
    rainbowPaintButton.classList.remove("selected");
    eraserButton.classList.remove("selected");
    selectedButton.classList.add("selected");
}

function paintPixel(pixel) {
    switch (selectedButton.id) {
        case "paint":
            pixel.style.backgroundColor = colorInput.value;
            break;
        case "rainbow-paint":
            pixel.style.backgroundColor = "#" + Math.floor(Math.random() * 256).toString(16) 
            + Math.floor(Math.random() * 256).toString(16) + Math.floor(Math.random() * 256).toString(16);
            break;
        case "eraser":
            pixel.style.backgroundColor = "white";
            break;
    }
}

function clear() {
    for (pixel of pixels) {
        pixel.style.backgroundColor = "white";
    }
}