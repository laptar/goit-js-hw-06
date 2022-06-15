const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
const listLi = ingredients.map((element) => {
	const liEl = document.createElement("li");
	liEl.classList.add("item");
	// liEl.setAttribute("class", "item");
	liEl.textContent = element;
	return liEl;
});

ingredientsEl.append(...listLi);
