const elements = document.getElementsByTagName('*'), 
	TIME_INTERVAL_SET = 2000,
	TIME_INTERVAL_CLEAR = 2000;

var storage = [];

function getRandomElement(elementsArr) {
	var randomElement = elementsArr[Math.floor(Math.random() * elementsArr.length)];
	storage.push(randomElement);
	return randomElement;
}

function setBackground() {
	var randomElement = getRandomElement(elements)
	var randomColor = '#' + Math.random().toString(16).slice(-6);
	randomElement.style.backgroundColor = randomColor;
}

function clearBackground() {
	var randomElement = getRandomElement(storage);
	randomElement.style.backgroundColor = '';
}

var timeId_set = setInterval(setBackground, TIME_INTERVAL_SET);
var timeId_clear = setInterval(clearBackground, TIME_INTERVAL_CLEAR);



