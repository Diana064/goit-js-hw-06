const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');

const increment = () => {
	counterValue.textContent = Number(counterValue.textContent) + 1;
};

const decrement = () => {
	counterValue.textContent = Number(counterValue.textContent) - 1;
};

decrementEl.addEventListener('click', decrement);
incrementEl.addEventListener('click', increment);
