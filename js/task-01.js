let str = "";
const categoriesEl = document.querySelector("#categories");
str += `Number of categories: ${categoriesEl.childElementCount}`;
[...categoriesEl.children].forEach(
	(element) =>
		(str += `\n\nCategory: ${element.firstElementChild.innerText}\nElements: ${element.lastElementChild.childElementCount}`)
);

console.log(str);
