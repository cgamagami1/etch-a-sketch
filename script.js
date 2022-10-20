const colorInput = document.getElementById("color");
const paintButton = document.getElementById("paint");
const rainbowPaintButton = document.getElementById("rainbow-paint");
const eraserButton = document.getElementById("eraser");
const clearButton = document.getElementById("clear");
const canvas = document.getElementById("canvas");
const pixels = [];

paintButton.addEventListener("click", () => { selectButton(paintButton); });
rainbowPaintButton.addEventListener("click", () => { selectButton(rainbowPaintButton); });
eraserButton.addEventListener("click", () => { selectButton(eraserButton); });
clearButton.addEventListener("click", clear);

selectButton(paintButton);

for (let i = 0; i < 256; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.addEventListener("mousedown", (e) => { selectPixel(e, pixel); });
    pixel.addEventListener("mousemove", (e) => { selectPixel(e, pixel); });
    canvas.appendChild(pixel);
    pixels.push(pixel);
}

function selectPixel(e, pixel) {
    if(e.buttons == 1){
        paintPixel(pixel);
        e.preventDefault();
    }
}

function selectButton(selectedButton) {
    paintButton.classList.remove("selected");
    rainbowPaintButton.classList.remove("selected");
    eraserButton.classList.remove("selected");
    selectedButton.classList.add("selected");
}

function paintPixel(pixel) {
    pixel.style.backgroundColor = colorInput.value;
}

function clear() {
    for (pixel of pixels) {
        pixel.style.backgroundColor = "white";
    }
}