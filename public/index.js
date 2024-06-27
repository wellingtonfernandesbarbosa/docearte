import "./style.css";
import { formMessage } from "./app/formMessage.js";
import { isClickInsideMenu } from "./app/menu.js";
import "./app/ourCatalog.js";
const menu = document.querySelector("#right-menu");
formMessage();
menu.addEventListener("click", (event) => {
    isClickInsideMenu(event);
});
