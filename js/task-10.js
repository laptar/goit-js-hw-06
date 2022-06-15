function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const numberEl = document.querySelector("#controls input");
const createBoxEl = document.querySelector("[data-create]");
const destroyBoxEl = document.querySelector("[data-destroy]");
const boxListEl = document.querySelector("#boxes");

let newNum = 0;

numberEl.addEventListener("blur", hendleInput);
function hendleInput(event) {
	numberEl.style.backgroundColor = "inherit";
	if (event.target.value > 100) {
		numberEl.style.backgroundColor = "#FF6E6E";
	} else {
		newNum = event.target.value;
	}
	console.log(newNum);
}

createBoxEl.addEventListener("click", hendleNum);
function hendleNum() {
	boxListEl.innerHTML = "";
	let str = ``;
	for (let i = 1; i <= newNum; i += Number(numberEl.step)) {
		str += `<div style="background-color: ${getRandomHexColor()}; width: ${
			30 + 10 * i
		}px; height:  ${30 + 10 * i}px"></div>`;
	}
	boxListEl.insertAdjacentHTML("beforeend", str);
}

destroyBoxEl.addEventListener("click", () => {
	boxListEl.innerHTML = "";
	newNum = 0;
});
