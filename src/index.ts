import { formMessage } from "./app/formMessage.js";
import { isClickInsideMenu } from "./app/menu.js";

const menu = document.querySelector("#right-menu") as HTMLUListElement;

formMessage();

menu.addEventListener("click", (event) => {
  isClickInsideMenu(event);
});
