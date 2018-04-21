export class Cart {
	constructor() {
		//array item
	}

	showCart() {	
		if (localStorage.length > 0) {
			let sum = 0;
		    for (let i = 0; i < localStorage.length; i++){
		        sum += JSON.parse(localStorage.getItem(localStorage.key(i)));
		    }

			document.querySelector('.sticker-wrapper').className += ' sticker_checked';
			document.querySelector('.amount').innerHTML = 'Итого: '.concat(localStorage.length, ' шт.');
			document.querySelector('.item-sum').innerHTML = 'Сумма: '.concat(sum, ' руб.');
		}
	}

	addItem(id, restoredPackage) {
		let sticker = document.querySelector('.sticker-wrapper'),
			total = document.querySelector('.amount'),
			sum = document.querySelector('.item-sum');
		sticker.className += ' sticker_checked';

		for (let i in localStorage) {
		    let key = localStorage.key(i);
		    if (id != key) {
		    	localStorage.setItem(id, restoredPackage[id].price);
		    	console.log('add');
		    }
		    else {
		    	console.log(key);
		    }
		}

		
		this.showCart();
	}

}