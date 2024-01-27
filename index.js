import { toggleMenu } from "./app/toggleMenu.js";
import { phoneInput } from "./app/phoneInput.js";

document.addEventListener("DOMContentLoaded", function () {
  toggleMenu();
  phoneInput();

  const form = document.querySelector("#form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});
