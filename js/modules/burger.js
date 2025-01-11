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

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!burgerIcon.contains(e.target) && !navMenu.contains(e.target)) {
      burgerIcon.classList.remove("active");
      navMenu.classList.remove("active");
      burgerIcon.querySelectorAll("span").forEach((span) => {
        span.style.transform = "none";
      });
    }
  });
}
