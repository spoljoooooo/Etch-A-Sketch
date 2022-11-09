// GRID

const container = document.querySelector(".container");

let selectGrid = prompt("chose: 8x8, 16x16, 32x32, 64x64");

let numberRows = selectGrid;
let numberColumns = selectGrid;

let maxWidth = 512/numberRows;

let arrayDivs = [];

function createArrayOfDivs (x, y) {
    let i = 0;
    while (i < (x*y)) {
        arrayDivs[i] = document.createElement("div");
        arrayDivs[i].style.cssText = `background-color: white; flex: 1 1 auto; width: ${maxWidth}px;`;
        arrayDivs[i].classList.add("pixel")
        container.appendChild(arrayDivs[i]);
        i++;
    }
}

createArrayOfDivs(numberRows, numberColumns);

// ON HOVER COLOR BLACK

const pixels = document.querySelectorAll(".pixel")

pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", (e) => {
        e.target.style.background = "black";
    });
});

// MENU

const colorPicker = document.querySelector(".colorPicker");
const colorMode = document.querySelector(".normal");
const rainbow = document.querySelector(".rainbow");
const erase = document.querySelector(".erase");
const clear = document.querySelector(".clear");

colorMode.addEventListener("click", (e) => {
    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover", (e) => {
            e.target.style.background = "black";
        });
    });
});

clear.addEventListener("click",  (e) => {
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = "white";
    });
});

erase.addEventListener("click", (e) => {
    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover", (e) => {
            e.target.style.background = "white";
        });
    });
});

rainbow.addEventListener("click", (e) => {
    function randomColor() {
        let randomCol = Math.floor(Math.random()*16777215).toString(16);
        return randomCol;
    }

    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover", (e) => {
            e.target.style.background = `#${randomColor()}`;
        });
    });
});

