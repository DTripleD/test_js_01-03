const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  list.append(listItem);
});  

// const list = document.querySelector("#ingredients");

// const create = createLiItem(ingredients);

// list.innerHTML = create;

// function createLiItem(ingredient){
//   return ingredient.map(ing=>`<li class = "item">${ing}</li>`).join("");
// };



