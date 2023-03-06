const text = document.querySelector("#text");

const controler = document.querySelector("#font-size-control");

text.style.fontSize = `${controler.value}px`

controler.addEventListener("input", (evt) => text.style.fontSize = `${evt.currentTarget.value}px`)


