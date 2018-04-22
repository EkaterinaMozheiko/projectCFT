import {asyncRequest} from './promise-module.js'
let imageBlock = [
	 	{
	 		image: 'shot-1.jpg',
	 		guid: "hfjdsbjfisOJKMD-Njnjds2gsdsk76"
	 	},
	 	{
	 		image: 'shot-2.jpg',
	 		guid: "hfjdsbjfisOJKMD-Njnnxt2gsdsk76"
	 	},
	 	{
	 		image: 'shot-3.jpg',
	 		guid: "hfjdsbkstsOJKMD-Njnjdsjnvdsk76"
	 	},
	 	{
	 		image: 'shot-4.jpg',
	 		guid: "hfjdsbjfisOJKMD-Njnjdsjnv82h76"
	 	},
	 	{
	 		image: 'shot-5.jpg',
	 		guid: "hfjdaldfisOJKMD-Njnjdsjnvdsk76"
	 	},
	 	{
	 		image: 'shot-6.jpg',
	 		guid: "hfjdsbjfisOJKMD-Njnjdsjmzbsk76"
	 	},
	 	{
	 		image: 'shot-7.jpg',
	 		guid: "hfjdsbjfis6jsMD-Njnjdsjnvdsk76"
	 	}
	 ];

export class Slider {
	constructor(sliderElement, blockWidth) {
		this.slider = sliderElement;
		this.width = blockWidth; 
		this.shift = -724;
	}

	sliderLeft() {
		var radio = document.querySelector('input[name="dot"]:checked');
		if (this.shift >= -this.width * 3) {
			this.shift -= this.width;
			this.slider.style.left = this.shift + 'px';
		}
		radio.previousElementSibling.checked = true;
	};

	sliderRight() {
		let radio = document.querySelector('input[name="dot"]:checked');
		if (this.shift != 0) {
			this.shift += this.width;
			this.slider.style.left = this.shift + 'px';
		}
		radio.nextElementSibling.checked = true;
	};

	showImage(n) {
		if (n == 0) {
			this.slider.style.left = n + 'px';
		}
		else if(n >= 1448) {
			this.slider.style.left = '-1448px';
		} 
		else
			this.slider.style.left = -n + 'px';
	};

	getPackage() {
		asyncRequest("app_package.json").then(
			result => {
				this.getImageBlock(result); 
			},
			error => {
				console.log("ERROR! getImageBlock ");
			} 
		);
	}

	convertDate(unixTimestamp){
		let months_arr = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'],
			date = new Date(unixTimestamp * 1000),
			year = date.getFullYear(),
		 	month = months_arr[date.getMonth()],
		 	day = date.getDate(),
			convertDate = day + ' ' + month + ' ' + year;
		return convertDate;
	}

	getImageBlock(restoredPackage) {
		for (let i = 0; i < 7; i++) {
			var template = document.querySelector('#my-template').content.cloneNode(true);
			for (let j = 0; j < 7; j++) {
				if (restoredPackage[i].guid == imageBlock[j].guid) {
					template.querySelector('img').src = 'assets/imageTask3/' + imageBlock[j].image;
				}
			}
			let parent = document.querySelector('#slider-block');
			template.querySelector('.main-logo__header').innerText = restoredPackage[i].title;
			template.querySelector('.date').innerText = this.convertDate(restoredPackage[i].lastUpdate);
			parent.appendChild(template);
		}
	}
}


