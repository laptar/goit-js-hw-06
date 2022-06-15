const fontSizeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
console.log(textEl);
console.dir(fontSizeEl);
fontSizeEl.addEventListener("input", (event) => {
	textEl.style.fontSize = `${event.target.valueAsNumber}px`;
	console.dir(event.target.valueAsNumber);
});
