const inputControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = inputControlEl.value + 'px';

const textResizing = () => {
	textEl.style.fontSize = `${inputControlEl.value}px`;
};

inputControlEl.addEventListener('input', textResizing);
