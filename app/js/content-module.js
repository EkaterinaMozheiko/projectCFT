import {Cart} from './cart-module.js';
import {asyncRequest} from './promise-module.js'
let cart = new Cart();

export class Content {

	constructor() {
	}

	getContent(restoredPackage, elemId) {
	    let contentTemplate = document.querySelector('#content-template').content.cloneNode(true),
			buttonCart = contentTemplate.querySelector('.button_blue');

		contentTemplate.querySelector('.content__header').innerText = restoredPackage[elemId].title;
		contentTemplate.querySelector('.date').innerText = this.convertDate(restoredPackage[elemId].lastUpdate);
		contentTemplate.querySelector('img').src = 'assets/imageTask3/' + restoredPackage[elemId].image;
		contentTemplate.querySelector('.strong').innerText = restoredPackage[elemId].contentItem_warning;
		contentTemplate.querySelector('.price').innerText = restoredPackage[elemId].price;

		let listItem = contentTemplate.querySelectorAll('.content__item'),
			activeLink = document.querySelectorAll('.active_lined');

		if (activeLink.length > 0) {
			activeLink[0].classList.remove('active_lined');
		}

		for (let i = 0; i < listItem.length; i++) {
			listItem[i].innerText = restoredPackage[elemId]["contentItem".concat(i)];
		}

		let active = restoredPackage.filter(link => elemId+1 == link.id);
		document.getElementById(active[0].id).className += ' active_lined';	

		buttonCart.addEventListener("click", cart.addItem.bind(cart, elemId, restoredPackage));

		const contentPage = document.getElementById('content');
		let templateAmount = contentPage.children;
		(templateAmount.length == 1)? contentPage.appendChild(contentTemplate) : contentPage.replaceChild(contentTemplate, contentPage.children[1]);	
	}

	getContentPackage(id) {
		asyncRequest("app_content.json").then(
			result => {
				this.getContent(result, id-1); //-1
			},
			error => {
				console.log("ERROR getContentPackage");
			} 
		);
	}

	convertDate(unixTimestamp){
	 var months_arr = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'],
	 	date = new Date(unixTimestamp * 1000),
		year = date.getFullYear(),
	 	month = months_arr[date.getMonth()],
	 	day = date.getDate(),
		convertDate = day + ' ' + month + ' ' + year;
	 	return convertDate;
	}
}
