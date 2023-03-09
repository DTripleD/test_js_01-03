function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonForChange = document.querySelector(".change-color");
const colorText = document.querySelector(".color");
const body = document.querySelector("body");


buttonForChange.addEventListener("click", changeColor);

function changeColor(){
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;
}