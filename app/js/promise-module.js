export function asyncRequest(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = () => resolve(JSON.parse(xhr.responseText));
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

export function randLoadingTime() {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			Math.random() > 0.2 ? resolve("success") : reject("failure");
		}, Math.random() * 10000);
	});
}





