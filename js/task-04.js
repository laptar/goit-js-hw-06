const valueEl = document.querySelector("#value");
const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
let counterValue = 0;

console.dir(valueEl);

decrementEl.addEventListener("click", () => {
	counterValue -= 1;
	valueEl.textContent = counterValue;
});
incrementEl.addEventListener("click", () => {
	counterValue += 1;
	valueEl.textContent = counterValue;
});
