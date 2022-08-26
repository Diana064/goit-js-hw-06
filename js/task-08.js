const forma = document.querySelector('.login-form');

forma.addEventListener('submit', (event) => {
	event.preventDefault();
	const formData = {};

	const {
		elements: { email, password },
	} = event.currentTarget;

	if (email.value === '' || password.value === '') {
		return alert('Всі поля мають бути заповнені!');
	}

	formData[email.name] = email.value;
	formData[password.name] = password.value;
	console.log(formData);
	forma.reset();
});
