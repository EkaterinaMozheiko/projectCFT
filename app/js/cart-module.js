import {asyncRequest} from './promise-module.js'

export class Cart {
	constructor() {

	}

	showCart() {	
		if (localStorage.length <= 0) {
			return;
		}

		asyncRequest("app_content.json").then(
			result => {
				let quantity = 0,
			    	total = 0,
			    	sum = 0;

				for (let i = 0; i < localStorage.length; i++) {
		    		let key = localStorage.key(i);
				    
				 	total += (JSON.parse(localStorage.getItem(key)));
					sum += (JSON.parse(localStorage.getItem(key)) * result[key].price); 
				}

				document.querySelector('.sticker-wrapper').className += ' sticker_checked';
				document.querySelector('.amount').innerHTML = 'Итого: '.concat(total, ' шт.');
				document.querySelector('.item-sum').innerHTML = 'Сумма: '.concat(sum, ' руб.');
			},
			error => {
				console.log("ERROR showCart");
			} 
		);       	
	}

	addItem(id, restoredPackage) {
		document.querySelector('.sticker-wrapper').className += ' sticker_checked';

		let total = 0,
			sum = 0,
			quantity = 0;

		(localStorage.hasOwnProperty(id)) ? localStorage.setItem(id, JSON.parse(localStorage.getItem(id)) + 1) : localStorage.setItem(id, 1);
		this.showCart();
	}

	getRow() {
		asyncRequest("app_content.json").then(
			result => {
				this.showItems(result); 
			},
			error => {
				console.log("ERROR getRow");
			} 
		);       
	};

	showItems(restoredPackage) {
		let parent = document.querySelector('.basket-table'),
			totalSumTemplate = document.querySelector('#total-sum').content,
			sum = 0;


		for (let i = 0; i < localStorage.length; i++) {
			let cartTemplate = document.querySelector('#cart-template').content.cloneNode(true),
		        key = localStorage.key(i);

		    cartTemplate.querySelector('.basket-table__row').classList.add('basket-table__row_' + key);

			cartTemplate.appendChild(cartTemplate.querySelector('.basket-table__row'));
			cartTemplate.querySelector('.basket-table__row').appendChild(cartTemplate.querySelector('.basket-table_cell-header'));
			cartTemplate.querySelector('img').src = 'assets/imageTask3/' + restoredPackage[key].image;
			cartTemplate.querySelector('.basket-table_cell-header').appendChild(cartTemplate.querySelector('.table-image'));
			cartTemplate.querySelector('.basket-table_cell-header').appendChild(cartTemplate.querySelector('.table_cell-wrapper'));
			cartTemplate.querySelector('.table_cell-wrapper').appendChild(cartTemplate.querySelector('.checkbox-wrapper'));
			cartTemplate.querySelector('.basket-table__header').innerHTML = restoredPackage[key].title;
			cartTemplate.querySelector('.checkbox-wrapper').appendChild(cartTemplate.querySelector('.basket-table__header'));
			cartTemplate.querySelector('.checkbox-wrapper').appendChild(cartTemplate.querySelector('.checkbox'));
			cartTemplate.querySelector('.checkbox-wrapper').appendChild(cartTemplate.querySelector('.label'));

			cartTemplate.querySelector('.basket-table__row').appendChild(cartTemplate.querySelector('.basket-table_cell-content'));
			cartTemplate.querySelector('.basket-table_cell-content').appendChild(cartTemplate.querySelector('.value-wrapper'));
			cartTemplate.querySelector('.total-sum_one').innerHTML = ''.concat(restoredPackage[key].price, ' руб.');
			cartTemplate.querySelector('.value-wrapper').appendChild(cartTemplate.querySelector('.total-sum_one'));
			cartTemplate.querySelector('.value-wrapper').appendChild(cartTemplate.querySelector('.counter'));
			cartTemplate.querySelector('.counter').appendChild(cartTemplate.querySelector('.button_round-left'));

			cartTemplate.querySelector('.button_round-left').addEventListener('click', this.minusItem.bind(this, key, restoredPackage));

			cartTemplate.querySelector('.counter__label').innerHTML = JSON.parse(localStorage.getItem(key))
			cartTemplate.querySelector('.counter__label').classList.add('counter__label_' + key);
			cartTemplate.querySelector('.counter').appendChild(cartTemplate.querySelector('.counter__label'));
			cartTemplate.querySelector('.counter').appendChild(cartTemplate.querySelector('.button_round-right'));

			cartTemplate.querySelector('.button_round-right').addEventListener('click', this.plusItem.bind(this, key, restoredPackage));
			
			cartTemplate.querySelector('.basket-table__row').appendChild(cartTemplate.querySelector('.basket-table_cell-sum'));

			cartTemplate.querySelector('.total-sum_last').innerHTML = ''.concat(JSON.parse(localStorage.getItem(key)) * restoredPackage[key].price, ' руб.');
			cartTemplate.querySelector('.total-sum_last').classList.add('total-sum_last_' + key);
			cartTemplate.querySelector('.basket-table_cell-sum').appendChild(cartTemplate.querySelector('.total-sum_last'));
			cartTemplate.querySelector('.basket-table_cell-sum').appendChild(cartTemplate.querySelector('.delete-button'));

			cartTemplate.querySelector('.delete-button').addEventListener('click', this.deleteItem.bind(this, key, restoredPackage));

			parent.appendChild(cartTemplate);

			sum += (JSON.parse(localStorage.getItem(key)) * restoredPackage[key].price); 
		    
		}

		if (localStorage.length != 0) {
			totalSumTemplate.querySelector('.total-sum_big').innerHTML = ''.concat(sum, ' руб.');
			document.querySelector('.sum').appendChild(totalSumTemplate);
		}
	}

	minusItem(id, restoredPackage) {
		let quantity = 0,
			sum = 0;
		(localStorage.getItem(id) > 1) ? localStorage.setItem(id, JSON.parse(localStorage.getItem(id)) - 1) : localStorage.setItem(id, 1);

		document.querySelector('.counter__label_' + id).innerHTML = JSON.parse(localStorage.getItem(id));
		document.querySelector('.total-sum_last_' + id).innerHTML = ''.concat(restoredPackage[id].price * localStorage.getItem(id), ' руб.');
		
		/*localStorage.reduce(function(sum, current) {
		  return sum + current;
		  console.log(current);
		}, 0);*/

		for (let i = 0; i < localStorage.length; i++) {
    		let key = localStorage.key(i);
			sum += (JSON.parse(localStorage.getItem(key)) * restoredPackage[key].price); 
		}

		document.querySelector('.total-sum_big').innerHTML = ''.concat(sum, ' руб.');

	}
	
	plusItem(id, restoredPackage) {
		let quantity = 0,
			sum = 0;
		localStorage.setItem(id, JSON.parse(localStorage.getItem(id)) + 1);

		document.querySelector('.counter__label_' + id).innerHTML = JSON.parse(localStorage.getItem(id));
		document.querySelector('.total-sum_last_' + id).innerHTML = ''.concat(restoredPackage[id].price * localStorage.getItem(id), ' руб.');

		for (let i = 0; i < localStorage.length; i++) {
    		let key = localStorage.key(i);
			sum += (JSON.parse(localStorage.getItem(key)) * restoredPackage[key].price); 
		}

		document.querySelector('.total-sum_big').innerHTML = ''.concat(sum, ' руб.');
	}

	deleteItem(id, restoredPackage) {
		let sum = 0;
		document.querySelector('.basket-table__row_' + id).parentNode.removeChild(document.querySelector('.basket-table__row_' + id));
		localStorage.removeItem(id);

		for (let i = 0; i < localStorage.length; i++) {
    		let key = localStorage.key(i);
			sum += (JSON.parse(localStorage.getItem(key)) * restoredPackage[key].price); 
		}

		if (sum === 0) {
			document.querySelector('.basket-table_header').parentNode.removeChild(document.querySelector('.basket-table_header'));
			//document.querySelector('.sum').parentNode.removeChild(document.querySelector('.sum'));
			document.querySelector('.sum').classList.add('sum_empty');
			document.querySelector('.sum_empty').innerHTML = 'Корзина пуста :(';
		}

		else {
			document.querySelector('.total-sum_big').innerHTML = ''.concat(sum, ' руб.');
		}

	}
}