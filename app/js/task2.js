const parent = document.getElementById('applications');

let blockList = [
 	block1 = {
 		image: 'shot-1.jpg',
 		header: 'Стандартный пакет',
 		date: '08 апреля 2012'
 	},
 	block2 = {
 		image: 'shot-2.jpg',
 		header: 'Новый ЦФТ-банк',
 		date: '09 сентября 2016',
 	},
 	block3 = {
 		image: 'shot-3.jpg',
 		header: 'Каталог разработок',
 		date: '03 марта 2015',
 	},
 	block4 = {
 		image: 'shot-4.png',
 		header: 'Мобильный Сбербанк',
 		date: '02 сентября 2014'
 	},
 	block5 = {
 		image: 'shot-5.jpg',
 		header: 'Какая-то мобилка',
 		date: '10 июля 2011'
 	},
 	block6 = {
 		image: 'shot-6.jpg',
 		header: 'Опять Сбербанк',
 		date: '28 января 2010'
 	},
 	block7 = {
 		image: 'shot-7.jpg',
 		header: 'ВТБ',
 		date: '01 марта 2017'
 	}
 ];

for (var i = 0; i < 3; i++) {
	var myTemplate = document.querySelector('#my-template').content.cloneNode(true),
	randomNum = Math.floor(Math.random() * 7); 

	myTemplate.querySelector('img').src = 'assets/imageTask3/' + blockList[randomNum].image;
	myTemplate.querySelector('.main-logo__header').innerText = blockList[randomNum].header;
	myTemplate.querySelector('.date').innerText = blockList[randomNum].date;
	parent.appendChild(myTemplate);
}

