document.addEventListener("DOMContentLoaded", getSidebarPackage);

const sidebar = document.getElementById('menu-list'),
	  content = document.getElementById('content');

function getSidebarPackage() {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", "app_package.json", true);
	xhr.onload = env => {
		if (xhr.readyState == 4) {
			var package = xhr.responseText;
			var restoredPackage = JSON.parse(package);
			getSidebar(restoredPackage);
		}
	}
	xhr.send();
}

function getContentPackage(id) {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", "app_content.json", true);
	xhr.onload = env => {
		if (xhr.readyState == 4) {
			var package = xhr.responseText;
			var restoredPackage = JSON.parse(package);
			getContent(restoredPackage, id);
		}
	}
	xhr.send();
}

function getSidebar(restoredPackage) {
	for (let i = 0; i < restoredPackage.length; i++) {
		var menuTemplate = document.querySelector('#menu-template').content.cloneNode(true);
		menuTemplate.querySelector('.menu__link').innerText = restoredPackage[i].title;
		menuTemplate.querySelector('.menu__link').id = i;
		sidebar.appendChild(menuTemplate);
	} 
}

function getContent(restoredPackage, id) {

    var contentTemplate = document.querySelector('#content-template').content.cloneNode(true);

	contentTemplate.querySelector('.content__header').innerText = restoredPackage[id].title;
	contentTemplate.querySelector('.date').innerText = convertDate(restoredPackage[id].lastUpdate);
	contentTemplate.querySelector('img').src = 'assets/imageTask3/' + restoredPackage[id].image;
	contentTemplate.querySelector('.strong').innerText = restoredPackage[id].contentItem_warning;

	var listItem = contentTemplate.querySelectorAll('.content__item');
	var activeLink = document.querySelectorAll('.active_lined');

	if (activeLink.length > 0) {
		activeLink[0].classList.remove('active_lined');
	}

	for (let i = 1; i <= listItem.length; i++) {
		listItem[i-1].innerText = restoredPackage[id]["contentItem".concat(i)];
	}

	var templateAmount = content.children;
	(templateAmount.length == 1)? content.appendChild(contentTemplate) : content.replaceChild(contentTemplate, content.children[1]);

	let active = restoredPackage.filter(link => id == link.id);
	document.getElementById(active[0].id).className += ' active_lined';	
}

function convertDate(unixTimestamp){
 var months_arr = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'],
 	date = new Date(unixTimestamp * 1000),
	year = date.getFullYear(),
 	month = months_arr[date.getMonth()],
 	day = date.getDate(),
	convertDate = day + ' ' + month + ' ' + year;
 	return convertDate;
}