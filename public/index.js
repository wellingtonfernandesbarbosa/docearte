import { formMessage } from "./app/formMessage.js";
import { isClickInsideMenu } from "./app/menu.js";
import "./app/ourCatalog.js";
import './app/curiosities.js';
const menu = document.querySelector("#right-menu");
formMessage();
menu.addEventListener("click", (event) => {
    isClickInsideMenu(event);
});
