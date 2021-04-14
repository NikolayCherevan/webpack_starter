import './scss/styles.scss';
const mockIt = '/src/mock.json';
"use strict";
const cardsWrapper = document.querySelector('.cards-wrapper')
const itCards = document.querySelector('.it-cards')


class initProject {
	constructor() {

	}
	addBtnEventListeners() {

		var selectedBtn = new Promise((resolve, reject) => {
			itCards.addEventListener('click', () => resolve(1))
		});
		return selectedBtn
	}
	choseCardsScope(some) {
		var mockUrl = new Promise((resolve, reject) => {
			switch (some) {
				case 1:
					resolve(mockIt)
			}
		});
		return mockUrl
	}
	async renderMockElements(mock) {
		try {
			let result = await fetch(mock);
			let data = await result.json();
			return data.cards;
		}
		catch (error) {
			console.log(error)
		}
	}
	renderCardsList(cardsScope) {

		cardsScope.forEach((item, index) => {
			cardsWrapper.innerHTML += `<div><div class="uk-card uk-card-default uk-card-body">
				<h3 class="uk-card-title"> ${item.name}</h3>
				</div></div>`
		})
	}
	addFlipListeners() {
		let count = 0;
		document.querySelectorAll('.uk-card').forEach((item, index) => {
			if (parseInt(document.cookie.split(' ')[0].split('=')[1]) == index) {
				item.classList.add('flipped')

			}
			item.addEventListener('click', event => {
				if ( document.cookie === ''  || parseInt(document.cookie.split(' ')[1].split('=')[1]) < 1) {
					count++;
					event.currentTarget.classList.toggle('flipped');
					
					const maxAge = 86400; // время жизни cookie

					document.cookie = `activeCard=${index}; max-age=${maxAge}`;
					document.cookie = `openedState=${count}; max-age=${maxAge}`;
					
				}
				else {
					if (event.currentTarget.classList.contains('flipped')) {

					}
					else {
						alert('Ты уже выбрал предсказание, на сегодня достаточно')
					}

				}
			})
		})
	}
}

document.addEventListener("DOMContentLoaded", function () {
	const startApp = new initProject();
	startApp.addBtnEventListeners()
		.then((data) => startApp.choseCardsScope(data))
		.then((data) => startApp.renderMockElements(data))
		.then((data) => startApp.renderCardsList(data))
		.then(() => startApp.addFlipListeners())
});
