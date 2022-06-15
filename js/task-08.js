const user = {};

const logFormEl = document.querySelector(".login-form");
logFormEl.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
	event.preventDefault();
	if (!logFormEl.elements.email.value || !logFormEl.elements.password.value) {
		alert("nonono");
	}
	const password = logFormEl.elements.password.value;
	const email = logFormEl.elements.email.value;
	const user = { email, password };
	event.currentTarget.reset();

	console.log(user);
}
