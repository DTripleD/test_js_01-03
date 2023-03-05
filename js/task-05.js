const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", nameChange);

function nameChange(event) {
  // if(inputEl.value.trim() === ""){
  //     nameEl.textContent = "Anonymous";
  // } else{
  //     nameEl.textContent = event.currentTarget.value;
  // }
  inputEl.value.trim() === ""
    ? (nameEl.textContent = "Anonymous")
    : (nameEl.textContent = event.currentTarget.value);
}
