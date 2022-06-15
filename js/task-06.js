const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", handleValidation);

function handleValidation(event) {
	if (!event.target.value) inputEl.removeAttribute("class");
	if (
		event.target.value &&
		event.target.value.length !== Number(inputEl.dataset.length)
	)
		inputEl.classList.contains("valid")
			? inputEl.classList.replace("valid", "invalid")
			: inputEl.classList.add("invalid");

	if (
		event.target.value &&
		event.target.value.length === Number(inputEl.dataset.length)
	)
		inputEl.classList.contains("invalid")
			? inputEl.classList.replace("invalid", "valid")
			: inputEl.classList.add("valid");
	console.log(event.target.value.length);
}
