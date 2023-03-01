const list = document.querySelector("#categories");
const listItem = document.querySelectorAll(".item");

console.log("Number of categories: ", listItem.length);

listItem.forEach((item) => {
    console.log("Category: ", item.firstElementChild.textContent);
    console.log(item.lastElementChild.children.length);
});