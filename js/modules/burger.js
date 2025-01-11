export function initBurgerMenu() {
  const burgerIcon = document.querySelector(".burger-icon");
  const navMenu = document.querySelector(".nav-menu");

  burgerIcon.addEventListener("click", () => {
    burgerIcon.classList.toggle("active");
    navMenu.classList.toggle("active");

    // Animate burger icon
    const spans = burgerIcon.querySelectorAll("span");
    spans.forEach((span, index) => {
      if (burgerIcon.classList.contains("active")) {
        span.style.transform =
          index === 1
            ? "scale(0)"
            : `rotate(${index === 0 ? "45deg" : "-45deg"})`;
      } else {
        span.style.transform = "none";
      }
    });
  });
}
