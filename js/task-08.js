const forma = document.querySelector('.login-form');

function controlForm(event) {
	event.preventDefault();
	const formEl = event.currentTarget.elements;
	const emailEl = formEl.email.value;
	const passwordEl = formEl.password.value;
	if (emailEl === '' || passwordEl === '') {
		alert('Заповненні не всі поля!');
	}
	console.log('Ваша почта: ', emailEl);
	console.log('Ваш пароль: ', passwordEl);
	event.currentTarget.reset();
}
forma.addEventListener('submit', controlForm);
