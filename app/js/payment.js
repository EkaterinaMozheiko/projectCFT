import {randLoadingTime} from './promise-module.js'

document.querySelector('.payment').addEventListener("click", () => { randLoadingTime().then(
																console.log('hello'),
    															result => alert("Fulfilled: " + result),
    															error => alert("Rejected: " + error.message) // Rejected: время вышло!
  );})
  