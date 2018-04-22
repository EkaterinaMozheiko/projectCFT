import {Cart} from './cart-module.js';
let cart = new Cart();

document.addEventListener("DOMContentLoaded", cart.getRow.bind(cart));
//document.querySelector('.button_round-left').addEventListener('check', cart.minusItem.bind(cart));
//document.querySelector('.button_round-right').addEventListener('check', cart.plusItem.bind(cart));
