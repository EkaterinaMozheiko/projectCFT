import {Cart} from './cart-module.js';
import {Slider} from './slider-module.js';

let cart = new Cart();
let slider = new Slider(document.querySelector('#slider-block'), 362);

document.addEventListener("DOMContentLoaded", cart.showCart.bind(cart));
document.addEventListener("DOMContentLoaded", slider.getPackage.bind(slider));
document.addEventListener("DOMContentLoaded", cart.showCart.bind(cart));

document.querySelector('#prev').addEventListener("click", slider.sliderLeft.bind(slider));
document.querySelector('#next').addEventListener("click", slider.sliderRight.bind(slider));

document.querySelector('#dot1').addEventListener("click", slider.showImage.bind(slider, 0));
document.querySelector('#dot2').addEventListener("click", slider.showImage.bind(slider, 362));
document.querySelector('#dot3').addEventListener("click", slider.showImage.bind(slider, 724));
document.querySelector('#dot4').addEventListener("click", slider.showImage.bind(slider, 1086));
document.querySelector('#dot5').addEventListener("click", slider.showImage.bind(slider, 1448));
document.querySelector('#dot6').addEventListener("click", slider.showImage.bind(slider, 1810));
document.querySelector('#dot7').addEventListener("click", slider.showImage.bind(slider, 2172));

//localStorage.clear();
