const elements = document.getElementsByTagName('*'),
	TIME_INTERVAL = 2000;

function getRandomElement(elementsArr) {
	var randomElement = elementsArr[Math.floor(Math.random() * elementsArr.length)];
	var randomColor = '#' + Math.random().toString(16).slice(-6);
	randomElement.style.backgroundColor = randomColor;
	return;
}

var timeId = setInterval('getRandomElement(elements)', TIME_INTERVAL);



