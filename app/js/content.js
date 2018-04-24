import {Cart} from './cart-module.js';
import {Sidebar} from './sidebar-module.js';
import {Content} from './content-module.js'

let cart = new Cart();
let sidebar = new Sidebar();
let content = new Content();

document.addEventListener("DOMContentLoaded", sidebar.getSidebarPackage.bind(sidebar));
document.addEventListener("DOMContentLoaded", cart.showCart.bind(cart));
document.addEventListener("DOMContentLoaded", content.getContentPackage.bind(content, 1));
