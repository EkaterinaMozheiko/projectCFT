const slider = document.getElementById('slider-block');
	  BLOCK_WIDTH = 362;

function sliderLeft() {
	let shift = -724;
	var radio = document.querySelector('input[name="dot"]:checked');
	if (shift >= -BLOCK_WIDTH * 3) {
		shift -= BLOCK_WIDTH;
		slider.style.left = shift + 'px';
	}
	radio.previousElementSibling.checked = true;
}

function sliderRight() {
	let shift = -724;
	var radio = document.querySelector('input[name="dot"]:checked');
	if (shift != 0) {
		shift += BLOCK_WIDTH;
		slider.style.left = shift + 'px';
	}
	radio.nextElementSibling.checked = true;
}

function showImage(n) {
  if (n == 0) {
  	slider.style.left = n + 'px';
  }
  else if(n >= 1448) {
  	slider.style.left = '-1448px';
  } 
  else
   slider.style.left = -n + 'px';
}

