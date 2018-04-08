const elements = document.getElementsByTagName("*");
var randElement = elements[Math.floor(Math.random() * elements.length)];
randElement.style.backgroundColor = "red";



