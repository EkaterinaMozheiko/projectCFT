import {randLoadingTime} from './promise-module.js'

export class Payment {
    constructor() {

    }

    handlerPrevent(event) {
        event.preventDefault();
    }

    getResponse() {
        this.addListeners();
        randLoadingTime()
        .then(
            result => {
                this.removeListeners();
                document.querySelector('.image-loading').style.display = 'none';
                document.querySelector('.background-loading').style.opacity = 1;

                for(let i = 0; i < sessionStorage.length; i++) {
                    let inputId = sessionStorage.key(i);
                    document.getElementById(inputId).value = sessionStorage.getItem(inputId);   
                }
            })
        .catch( 
            error => this.setTextWarning("Данные где-то потерялись:( Обновите страничку!")
        )
    }

    sendForm() {
        document.querySelector('.image-loading').style.display = 'block';
        document.querySelector('.background-loading').style.opacity = 0.5;

        this.addListeners();

        let inputElements = document.querySelectorAll('.input-field');
        inputElements.forEach(element => sessionStorage.setItem(element.id, element.value));

        randLoadingTime()
        .then(
            result => {
                this.removeListeners();
                this.inputFill();
            }
        )
        .catch(
            error => this.setTextWarning("Ой-ой-ой! Проверьте форму и отправьте заново.")
        )
    }

    inputFill() {
        let inputElements = document.querySelectorAll('.input-field');
            if([...inputElements].some(this.isEmpty)) {
                document.querySelector('.image-loading').style.display = 'none';
                document.querySelector('.background-loading').style.opacity = 1;
                return;
            }
        document.location.href = "step4.html";
    }

    isEmpty(element) {
        return element.value == '';
    }

    setTextWarning(message) {
        this.removeListeners();
        document.querySelector('.text-warning').innerHTML = message;
        document.querySelector('.image-loading').style.display = 'none';
        document.querySelector('.background-loading').style.opacity = 1;
    }

    addListeners() {
        document.querySelector('.background-loading').addEventListener("mousedown", this.handlerPrevent);
        document.querySelector('.background-loading').addEventListener("click", this.handlerPrevent);
    }

    removeListeners() {
        document.querySelector('.background-loading').removeEventListener('click', this.handlerPrevent);
        document.querySelector('.background-loading').removeEventListener('mousedown', this.handlerPrevent);
    }
}