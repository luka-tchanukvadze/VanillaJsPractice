import { initSlider } from "./modules/slider.js";
import { initForm } from "./modules/form.js";
import { initAccordion } from "./modules/accordion.js";
import { initFilter } from "./modules/filter.js";
import { initBurgerMenu } from "./modules/burger.js";
import { initCookieNotice } from "./modules/cookies.js";
import { initScrollToTop } from "./modules/scroll.js";

document.addEventListener("DOMContentLoaded", () => {
  initSlider();
  initForm();
  initAccordion();
  initFilter();
  initBurgerMenu();
  initCookieNotice();
  initScrollToTop();
});
