function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body;
const changeColorEl = document.querySelector(".change-color");
const colorNameEl = document.querySelector(".color");

changeColorEl.addEventListener("click", () => {
	colorNameEl.textContent = getRandomHexColor();
	bodyEl.style.backgroundColor = getRandomHexColor();
});
