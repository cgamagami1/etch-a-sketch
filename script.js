const colorInput = document.getElementById("color");
const paintButton = document.getElementById("paint");
const rainbowPaintButton = document.getElementById("rainbow-paint");
const eraserButton = document.getElementById("eraser");
const clearButton = document.getElementById("clear");
const canvas = document.getElementById("canvas");

paintButton.addEventListener("click", () => {selectButton(paintButton)});
rainbowPaintButton.addEventListener("click", () => {selectButton(rainbowPaintButton)});
eraserButton.addEventListener("click", () => {selectButton(eraserButton)});
clearButton.addEventListener("click", clear);

selectButton(paintButton);

for (let i = 0; i < 256; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    canvas.appendChild(pixel);
}

function selectButton(selectedButton) {
    paintButton.classList.remove("selected");
    rainbowPaintButton.classList.remove("selected");
    eraserButton.classList.remove("selected");
    selectedButton.classList.add("selected");
}

function paintPixel(pixel) {
    
}

function clear() {

}