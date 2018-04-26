import {asyncRequest} from './promise-module.js'
import {Content} from './content-module.js'
import {imageBlock} from './imageBlock-module.js'

export class Slider {
    constructor(sliderElement, blockWidth) {
        this.slider = sliderElement;
        this.width = blockWidth; 
        this.shift = -724;
        this.blocksInRow = 3;
        this.sliderElements = 7;
    }

    sliderLeft() {
        const controlDot = document.querySelector('input[name="dot"]:checked');
        if (this.shift >= -this.width * this.blocksInRow) {
            this.shift -= this.width;
            this.slider.style.left = this.shift + 'px';
        }
        if (document.querySelector('.main__slider-controlDot_form').firstChild != controlDot) {
            controlDot.previousElementSibling.checked = true;
        }
    }

    sliderRight() {
        const controlDot = document.querySelector('input[name="dot"]:checked');
        if (this.shift != 0) {
            this.shift += this.width;
            this.slider.style.left = this.shift + 'px';
        }
        if (document.querySelector('.main__slider-radio_form').lastChild != controlDot) {
            controlDot.nextElementSibling.checked = true;
        }
    }

    showImage(n) {
        this.slider.style.left = -Math.min(1448, n) + 'px'; 
    }

    getPackage() {
        asyncRequest("app_package.json")
        .then(
            result => this.getImageBlock(result)
        ).catch (
            error => console.log("ERROR! getImageBlock ")
        )
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
        for (let i = 0; i < this.sliderElements; i++) {
            const template = document.querySelector('#my-template').content.cloneNode(true);
            for (let j = 0; j < this.sliderElements; j++) {
                if (restoredPackage[i].guid == imageBlock[j].guid) {
                    template.querySelector('.image_clicked').src = 'assets/imageTask3/' + imageBlock[j].image;                                               
                }
            }
            const parent = document.querySelector('#slider-block');
            template.querySelector('.main-logo__header').innerText = restoredPackage[i].title;
            template.querySelector('.date').innerText = this.convertDate(restoredPackage[i].lastUpdate);
            parent.appendChild(template);
        }
    }
}


