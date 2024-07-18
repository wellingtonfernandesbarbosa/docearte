import "./app/ourCatalog.js";
import './app/curiosities.js';

import { formMessage } from "./app/formMessage.js";
formMessage();

import { isClickInsideMenu } from "./app/menu.js";
const menu = document.querySelector("#right-menu") as HTMLUListElement;
menu.addEventListener("click", (event) => {
  isClickInsideMenu(event);
});
