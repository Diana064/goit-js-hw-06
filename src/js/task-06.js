const validationInputElement = document.querySelector('#validation-input');
const checkNum = () => {
	if (
		validationInputElement.value.length ===
		Number(validationInputElement.dataset.length)
	) {
		validationInputElement.classList.remove(`invalid`);
		validationInputElement.classList.add(`valid`);
		return;
	} else {
		validationInputElement.classList.remove(`valid`);
		validationInputElement.classList.add(`invalid`);
	}
};

validationInputElement.addEventListener('blur', checkNum);
