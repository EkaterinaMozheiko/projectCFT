import {convertDate} from './module.js';
import {Cart} from './cart-module.js';

document.addEventListener("DOMContentLoaded", getSidebarPackage);
document.addEventListener("DOMContentLoaded", showCart);

function showCart() {	
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

function getSidebarPackage() {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", "app_package.json", true);
	xhr.onload = function() {
		let sidebarPackage = xhr.responseText,
			restoredPackage = JSON.parse(sidebarPackage);
		getSidebar(restoredPackage);
	}
	xhr.send();
}

var getContentPackage = function(id) {
	return function() {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", "app_content.json", true);
		xhr.onload = function() {
			let contentPackage = xhr.responseText,
				restoredPackage = JSON.parse(contentPackage);
			getContent(restoredPackage, id);
		}
		xhr.send();
	}
}

window.addEventListener("load", getContentPackage(0));

function getSidebar(restoredPackage) {
	const sidebar = document.querySelector('#menu-list');
	for (let i = 0; i < restoredPackage.length; i++) {
		let menuTemplate = document.querySelector('#menu-template').content.cloneNode(true);

		menuTemplate.querySelector('.menu__link').innerText = restoredPackage[i].title;
		menuTemplate.querySelector('.menu__item').appendChild(menuTemplate.querySelector('.menu__link'));
		menuTemplate.querySelector('.menu__link').id = i;
		menuTemplate.querySelector('.menu__item').addEventListener("click", getContentPackage(menuTemplate.querySelector('.menu__link').id));
		sidebar.appendChild(menuTemplate);
	} 
}


let cart = new Cart();


function getContent(restoredPackage, id) {
	const content = document.getElementById('content');
    let contentTemplate = document.querySelector('#content-template').content.cloneNode(true),
		buttonCart = contentTemplate.querySelector('.button_blue');

	contentTemplate.querySelector('.content__header').innerText = restoredPackage[id].title;
	contentTemplate.querySelector('.date').innerText = convertDate(restoredPackage[id].lastUpdate);
	contentTemplate.querySelector('img').src = 'assets/imageTask3/' + restoredPackage[id].image;
	contentTemplate.querySelector('.strong').innerText = restoredPackage[id].contentItem_warning;
	contentTemplate.querySelector('.price').innerText = restoredPackage[id].price;

	let listItem = contentTemplate.querySelectorAll('.content__item'),
		activeLink = document.querySelectorAll('.active_lined');

	if (activeLink.length > 0) {
		activeLink[0].classList.remove('active_lined');
	}

	for (let i = 0; i < listItem.length; i++) {
		listItem[i].innerText = restoredPackage[id]["contentItem".concat(i)];
	}

	let active = restoredPackage.filter(link => id == link.id);
	document.getElementById(active[0].id).className += ' active_lined';	

	buttonCart.addEventListener("click", function(event){
                cart.addItem(id, restoredPackage);
            });
	let templateAmount = content.children;
	(templateAmount.length == 1)? content.appendChild(contentTemplate) : content.replaceChild(contentTemplate, content.children[1]);	
}