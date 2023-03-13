function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getRandomRgb() {
  const red = Math.round(Math.random(0, 1) * 255);
  const green = Math.round(Math.random(0, 1) * 255);
  const blue = Math.round(Math.random(0, 1) * 255);

  return `rgb(${red},${green},${blue})`;
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const numberFromInput = document.querySelector("input");
const boxFather = document.querySelector("#boxes");
const min = Number(numberFromInput.min);
const max = Number(numberFromInput.max);

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

boxFather.style.display = "flex";
boxFather.style.alignItems = "center";
boxFather.style.gap = "10px";
boxFather.style.flexWrap = "wrap";

function createBoxes(amount) {
  let size = 30;
  amount = numberFromInput.value;

  if (amount < min || amount > max || amount.trim() === "") {
    return alert("Fill valid number!!!");
  }

  for (let i = 1; i <= amount; i += 1) {
    const markup = `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;

    size += 10;

    boxFather.insertAdjacentHTML("beforeend", markup);
  }
}

function destroyBoxes() {
  numberFromInput.value = "";
  boxFather.innerHTML = "";
}