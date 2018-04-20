const parent = document.getElementById('slider-block');
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

let imageBlock = [
 	block1 = {
 		image: 'shot-1.jpg',
 		guid: "hfjdsbjfisOJKMD-Njnjds2gsdsk76"
 	},
 	block1 = {
 		image: 'shot-2.jpg',
 		guid: "hfjdsbjfisOJKMD-Njnnxt2gsdsk76"
 	},
 	block1 = {
 		image: 'shot-3.jpg',
 		guid: "hfjdsbkstsOJKMD-Njnjdsjnvdsk76"
 	},
 	block1 = {
 		image: 'shot-4.jpg',
 		guid: "hfjdsbjfisOJKMD-Njnjdsjnv82h76"
 	},
 	block1 = {
 		image: 'shot-5.jpg',
 		guid: "hfjdaldfisOJKMD-Njnjdsjnvdsk76"
 	},
 	block1 = {
 		image: 'shot-6.jpg',
 		guid: "hfjdsbjfisOJKMD-Njnjdsjmzbsk76"
 	},
 	block1 = {
 		image: 'shot-7.jpg',
 		guid: "hfjdsbjfis6jsMD-Njnjdsjnvdsk76"
 	}
 ];

function getPackage() {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", "app_package.json", true);
	xhr.onload = env => {
		//console.log(xhr.readyState);
		if (xhr.readyState == 4) {
			var package = xhr.responseText;
			var restoredPackage = JSON.parse(package);
			main(restoredPackage);
		}
	}
	xhr.send();
}

getPackage();

function main(restoredPackage) {
	for (let i = 0; i < 7; i++) {
		var template = document.querySelector('#my-template').content.cloneNode(true);
		for (let j = 0; j < 7; j++) {
			if (restoredPackage[i].guid ==  imageBlock[j].guid) {
				template.querySelector('img').src = 'assets/imageTask3/' + imageBlock[j].image;
			}
		}
		template.querySelector('.main-logo__header').innerText = restoredPackage[i].title;
		template.querySelector('.date').innerText = convertDate(restoredPackage[i].lastUpdate);
		parent.appendChild(template);
	}
}

const slider = document.getElementById('slider-block');
	  BLOCK_WIDTH = 362;
let shift = -724;

function sliderLeft() {
	var radio = document.querySelector('input[name="dot"]:checked');
	if (shift >= -BLOCK_WIDTH * 3) {
		shift -= BLOCK_WIDTH;
		slider.style.left = shift + 'px';
	}
	radio.previousElementSibling.checked = true;
}

function sliderRight() {
	var radio = document.querySelector('input[name="dot"]:checked');
	if (shift != 0) {
		shift += BLOCK_WIDTH;
		slider.style.left = shift + 'px';
	}
	radio.nextElementSibling.checked = true;
}

function showImage(n) {
  if (n == 0) {
  	slider.style.left = n + 'px';
  }
  else if(n >= 1448) {
  	slider.style.left = '-1448px';
  } 
  else
   slider.style.left = -n + 'px';
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