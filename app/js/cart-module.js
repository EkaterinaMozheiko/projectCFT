export class Cart {
	constructor() {
	}

	addItem(id, restoredPackage) {
		let sticker = document.querySelector('.sticker-wrapper'),
			total = document.querySelector('.amount'),
			sum = document.querySelector('.item-sum');
		sticker.className += ' sticker_checked';

		localStorage.setItem(id, restoredPackage[id].price);
		if (localStorage.length > 0) {
			let sum = 0;
		    for (let i = 0; i < localStorage.length; i++){
		        sum += JSON.parse(localStorage.getItem(localStorage.key(i)));
		        console.log(localStorage.getItem(localStorage.key(i)));
		    }

		    document.querySelector('.sticker-wrapper').className += ' sticker_checked';
			document.querySelector('.amount').innerHTML = 'Итого: '.concat(localStorage.length, ' шт.');
			document.querySelector('.item-sum').innerHTML = 'Сумма: '.concat(sum, ' руб.');
		}
	}
}