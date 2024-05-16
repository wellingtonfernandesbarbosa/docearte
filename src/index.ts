import { formMessage } from "./app/formMessage.js";
import { isClickInsideMenu } from "./app/menu.js";

const menu = document.querySelector("#right-menu") as HTMLUListElement;
const hanburguerIcon = document.querySelector(".menu-toggle") as HTMLDivElement;

formMessage();

menu.addEventListener("click", (event) => {
  isClickInsideMenu(event);
});

hanburguerIcon.addEventListener("click", () => {
  navigator.vibrate && navigator.vibrate(50);
})
