const elements = document.getElementsByTagName('*'), 
	TIME_INTERVAL = 2000;

function getRandomElement(elementsArr) {
	return randomElement = elementsArr[Math.floor(Math.random() * elementsArr.length)];
}

function setBackground() {
	var randomElement = getRandomElement(elements)
	var randomColor = '#' + Math.random().toString(16).slice(-6);
	randomElement.style.backgroundColor = randomColor;
	return;
}

function clearBackground() {
	var randomElement = getRandomElement(elements);
	randomElement.style.backgroundColor = 'transparent';
}

var timeId = setInterval('setBackground()', TIME_INTERVAL);
var timeId2 = setInterval('clearBackground()', TIME_INTERVAL);



