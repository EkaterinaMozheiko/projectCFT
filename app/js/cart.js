document.addEventListener("DOMContentLoaded", getRow);
document.querySelector('.button_round-left').addEventListener('check', minusItem);
document.querySelector('.button_round-right').addEventListener('check', plusItem);

function getRow() {
	let parent = document.querySelector('.basket-table');

	console.log(localStorage.length);
	if (localStorage.length > 0) {
	    for (let i = 0; i < localStorage.length; i++){   	
	        let key = localStorage.key(i);
	    	const xhr = new XMLHttpRequest();
			xhr.open("GET", "app_content.json", true);
			xhr.onload = function() {


				let contentPackage = xhr.responseText,
					restoredPackage = JSON.parse(contentPackage);
					let cartTemplate = document.querySelector('#cart-template').content.cloneNode(true);

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
					cartTemplate.querySelector('.counter').appendChild(cartTemplate.querySelector('.counter__label'));
					cartTemplate.querySelector('.counter').appendChild(cartTemplate.querySelector('.button_round-right'));
					
					cartTemplate.querySelector('.basket-table__row').appendChild(cartTemplate.querySelector('.basket-table_cell-sum'));
					cartTemplate.querySelector('.total-sum_last').innerHTML = ''.concat(restoredPackage[key].price, ' руб.');
					cartTemplate.querySelector('.basket-table_cell-sum').appendChild(cartTemplate.querySelector('.total-sum_last'));
					cartTemplate.querySelector('.basket-table_cell-sum').appendChild(cartTemplate.querySelector('.delete-button'));

					parent.appendChild(cartTemplate);


			}
			xhr.send();
		}
		let totalSumTemplate = document.querySelector('#total-sum').content,
			sum = 0;
		for (let i = 0; i < localStorage.length; i++){
	        let key = localStorage.key(i);
	        sum += JSON.parse(localStorage.getItem(key));
		}

		totalSumTemplate.querySelector('.total-sum_big').innerHTML = ''.concat(sum, ' руб.');
		document.querySelector('.sum').appendChild(totalSumTemplate);
	}
}

function minusItem() {

	for (let i = 0; i < localStorage.length; i++){
	        let key = localStorage.key(i);
	        sum += JSON.parse(localStorage.getItem(key));
		}

}

function plusItem() {
	
}
