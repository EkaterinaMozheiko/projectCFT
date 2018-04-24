import {Content} from './content-module.js'
import {asyncRequest} from './promise-module.js'

let contentObject = new Content();

export class Sidebar {
	constructor() {
	}

	getSidebarPackage() {
		asyncRequest("app_package.json").then(
			result => {
				this.getSidebar(result); 
			},
			error => {
				console.log("ERROR getSidebarPackage");
			} 
		);
	};

	getSidebar(restoredPackage) {
		const sidebar = document.querySelector('#menu-list');
		for (let i = 0; i < restoredPackage.length; i++) {
			let menuTemplate = document.querySelector('#menu-template').content.cloneNode(true);
			menuTemplate.querySelector('.menu__link').innerText = restoredPackage[i].title;
			menuTemplate.querySelector('.menu__item').appendChild(menuTemplate.querySelector('.menu__link'));
			menuTemplate.querySelector('.menu__link').id = i+1;
			menuTemplate.querySelector('.menu__item').addEventListener("click", contentObject.getContentPackage.bind(contentObject, (menuTemplate.querySelector('.menu__link').id)));
			sidebar.appendChild(menuTemplate);	
		};
	}	
}