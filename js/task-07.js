const fontSizeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
fontSizeEl.addEventListener("input", (event) => {
	textEl.style.fontSize = `${event.target.valueAsNumber}px`;
});
