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

 for (let i = 0; i < 3; i++) {
	var block = document.createElement('div');
	var image = document.createElement('img');
	var header = document.createElement('h3');
	var date = document.createElement('div');

	randomNum = Math.floor(Math.random() * 7);
	block.classList.add('main-logo__item', 'main-logo__item_shot' + i); 

	image.src = 'assets/imageTask3/' + blockList[randomNum].image;
	image.setAttribute('width', '330');
	image.setAttribute('height', '198');

	header.classList.add('main-logo__header');
	header.innerHTML = blockList[randomNum].header;

	date.classList.add('date');
	date.innerHTML = blockList[randomNum].date;

	parent.appendChild(block);
	block.appendChild(image);
	block.appendChild(header);
	block.appendChild(date);
}