const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const spanEl = document.querySelector('#value');
let counterValue = 0;

decrementBtn.addEventListener('click', () => {
	counterValue -= 1;
	spanEl.innerHTML = `${counterValue}`;
});

incrementBtn.addEventListener('click', () => {
	counterValue += 1;
	spanEl.textContent = `${counterValue}`;
});
