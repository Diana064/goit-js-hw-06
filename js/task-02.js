const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];
const ulEl = document.querySelector('#ingredients');
const elements = [];
for (let i = 0; i < ingredients.length; i += 1) {
	const ingredient = ingredients[i];
	// console.log(ingredient);
	const liEl = document.createElement('li');

	liEl.textContent = ingredient;
	// console.log(liEl);
	liEl.classList.add('item');
	elements.push(liEl);
}
ulEl.append(...elements);
console.log(ulEl);
