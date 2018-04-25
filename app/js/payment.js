import {randLoadingTime} from './promise-module.js'

function handler(event) {
    let target = event.target;
    event.preventDefault();
}


document.addEventListener("DOMContentLoaded", () => { 
    document.querySelector('.background-loading').addEventListener("mousedown", handler);
    document.querySelector('.background-loading').addEventListener("click", handler);

    randLoadingTime()
    .then(
    	result => {
            document.querySelector('.background-loading').removeEventListener('click', handler);
            document.querySelector('.background-loading').removeEventListener('mousedown', handler);
            document.querySelector('.image-loading').style.display = 'none';
            document.querySelector('.background-loading').style.opacity = 1;
            for(let i = 0; i < sessionStorage.length; i++) {
                let inputId = sessionStorage.key(i);
                document.getElementById(inputId).value = sessionStorage.getItem(inputId);   
            }
        })
    .catch( 
        error => setTextWarning("Данные где-то потерялись:( Обновите страничку!")
    )
});

document.querySelector('.send').addEventListener("click", () => {

    document.querySelector('.image-loading').style.display = 'block';
    document.querySelector('.background-loading').style.opacity = 0.5;
    let inputElements = document.querySelectorAll('.input-field');
    for(let i = 0; i < inputElements.length; i++) {
        sessionStorage.setItem(inputElements[i].id, inputElements[i].value);
    }

    randLoadingTime()
    .then(
        result => inputFilled()
    )
    .catch(
        error => setTextWarning("Данные где-то потерялись:( Отправьте форму заново!")
    )
});


function inputFilled() {
    let inputElements = document.querySelectorAll('.input-field');
        if([...inputElements].some(isEmpty)) {
            document.querySelector('.image-loading').style.display = 'none';
            document.querySelector('.background-loading').style.opacity = 1;
            return;
        }
    document.location.href = "step4.html";
}

function isEmpty(element) {
    return element.value == '';
}

function setTextWarning(message) {
    document.querySelector('.text-warning').innerHTML = message;
    document.querySelector('.background-loading').removeEventListener('click', handler);
    document.querySelector('.background-loading').removeEventListener('mousedown', handler);
    document.querySelector('.image-loading').style.display = 'none';
    document.querySelector('.background-loading').style.opacity = 1;
}