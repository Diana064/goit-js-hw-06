// const forma = document.querySelector('.login-form');

// function controlForm(event) {
// 	event.preventDefault();
// 	const formEl = event.currentTarget.elements;
// 	const emailEl = formEl.email.value;
// 	const passwordEl = formEl.password.value;

// 	if (emailEl === '' || passwordEl === '') {
// 		alert('Заповненні не всі поля!');
// 	}
// 	console.log('Ваша почта: ', emailEl);
// 	console.log('Ваш пароль: ', passwordEl);
// 	event.currentTarget.reset();
// }
// forma.addEventListener('submit', controlForm);

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
