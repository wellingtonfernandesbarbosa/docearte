import { toggleMenu } from './app/toggleMenu.js';
import { phoneInput } from './app/phoneInput.js';
import { dashboardNavigation } from './app/dashboardNavigation.js';


document.addEventListener('DOMContentLoaded', function () {
  toggleMenu();
  phoneInput();
  dashboardNavigation();
});
