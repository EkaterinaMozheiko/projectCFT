import {randLoadingTime} from './promise-module.js'
import {Payment} from './payment-module.js'

let payment = new Payment();

document.addEventListener("DOMContentLoaded", payment.getResponse.bind(payment));
document.querySelector('.send').addEventListener("click", payment.sendForm.bind(payment));
